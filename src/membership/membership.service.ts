import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MembershipDto } from './dto/membership.dto';
import { MembershipEntity } from './membership.entity';
import { MembershipRepository } from './membership.repository';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(MembershipEntity)
    private membershipRepository: MembershipRepository,
  ) {}

  async findAll(): Promise<MembershipEntity[]> {
    const list = await this.membershipRepository.find();
    if (!list.length) {
      throw new NotFoundException({ message: 'La lista esta vacia' });
    }

    return list;
  }

  async findById(id: number): Promise<MembershipEntity> {
    const membership = await this.membershipRepository.findOne(id);

    if (!membership) {
      throw new NotFoundException({
        message: `No existe membresia con el id ${id}`,
      });
    }

    return membership;
  }

  async save(dto: MembershipDto): Promise<any> {
    const membership = this.membershipRepository.create(dto);
    await this.membershipRepository.save(membership);

    return { message: 'Membresia guardada' };
  }

  async update(id: number, dto: MembershipDto): Promise<any> {
    const membership = await this.findById(id);

    dto.address
      ? (membership.address = dto.address)
      : (membership.address = membership.address);

    dto.birthdate
      ? (membership.birthdate = dto.birthdate)
      : (membership.birthdate = membership.birthdate);

    dto.email
      ? (membership.email = dto.email)
      : (membership.email = membership.email);

    dto.status
      ? (membership.status = dto.status)
      : (membership.status = membership.status);

    await this.membershipRepository.save(membership);

    return { message: 'Membresia actualizada' };
  }
}
