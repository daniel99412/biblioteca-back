import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DevolutionDetailEntity } from './devolution-detail.entity';
import { DevolutionDetailRepository } from './devolution-detail.repository';
import { DevolutionDetailDto } from './dto/devolution-detail.dto';

@Injectable()
export class DevolutionDetailService {
  constructor(
    @InjectRepository(DevolutionDetailEntity)
    private devolutionDetailRepository: DevolutionDetailRepository,
  ) {}

  async findAll(): Promise<DevolutionDetailEntity[]> {
    const list = await this.devolutionDetailRepository.find();

    if (!list.length) {
      throw new NotFoundException({ message: 'La lista esta vacia' });
    }

    return list;
  }

  async findByDevolution(
    devolution: number,
  ): Promise<DevolutionDetailEntity[]> {
    const list = await this.devolutionDetailRepository.find({
      where: `devolucion_id = ${devolution}`,
    });

    if (!list.length) {
      throw new NotFoundException({ message: 'La lista esta vacia' });
    }

    return list;
  }

  async save(dto: DevolutionDetailDto): Promise<any> {
    const entity = await this.devolutionDetailRepository.create(dto);
    await this.devolutionDetailRepository.save(entity);

    return { message: 'Detalle Devolucion guardado' };
  }
}
