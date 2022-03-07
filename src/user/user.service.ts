import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: UserRepository,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    const list = await this.userRepository.find();

    if (!list.length) {
      throw new NotFoundException({ message: 'La lista esta vacia' });
    }
    return list;
  }

  async findById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException({
        message: `No existe el usuario con el id ${id}`,
      });
    }

    return user;
  }

  async findByName(name: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: `nombre LIKE "%${name}%"`,
    });

    if (!user) {
      throw new NotFoundException({
        message: `No existe usuario con el nombre ${name}`,
      });
    }
    return user;
  }

  async save(dto: UserDto): Promise<any> {
    const user = this.userRepository.create(dto);
    await this.userRepository.save(user);

    return { message: 'Usuario guardado' };
  }

  async update(id: number, dto: UserDto): Promise<any> {
    const user = await this.findById(id);

    dto.name ? (user.name = dto.name) : (user.name = user.name);
    dto.telephone
      ? (user.telephone = dto.telephone)
      : (user.telephone = user.telephone);

    dto.type ? (user.type = dto.type) : (user.type = user.type);

    await this.userRepository.save(user);

    return { message: 'Usuario actualizado' };
  }
}
