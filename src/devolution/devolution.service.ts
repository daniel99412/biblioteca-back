import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DevolutionEntity } from './devolution.entity';
import { DevolutionRepository } from './devolution.repository';
import { DevolutionDto } from './dto/devolution.dto';

export class DevolutionService {
  constructor(
    @InjectRepository(DevolutionEntity)
    private devolutionRepository: DevolutionRepository,
  ) {}

  async findAll(): Promise<DevolutionEntity[]> {
    const list = await this.devolutionRepository.find();

    if (!list.length) {
      throw new NotFoundException({ message: 'La lista esta vacia' });
    }

    return list;
  }

  async fondByLoan(loan: number): Promise<DevolutionEntity[]> {
    const list = await this.devolutionRepository.find({
      where: `prestamo_id = ${loan}`,
    });

    if (!list.length) {
      throw new NotFoundException({ message: 'La lista esta vacia' });
    }

    return list;
  }

  async save(dto: DevolutionDto): Promise<any> {
    const devolution = await this.devolutionRepository.create(dto);
    const toReturn = await this.devolutionRepository.save(devolution);

    return toReturn;
  }
}
