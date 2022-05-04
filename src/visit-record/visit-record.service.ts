import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VisitRecordDto } from './dto/visit-record.dto';
import { VisitRecordEntity } from './visit-record.entity';
import { VisitRecordRepository } from './visit-record.repository';

@Injectable()
export class VisitRecordService {
  constructor(
    @InjectRepository(VisitRecordRepository)
    private visitRecordRepository: VisitRecordRepository,
  ) {}

  async findAll(): Promise<VisitRecordEntity[]> {
    const list = await this.visitRecordRepository.find();

    if (!list.length) {
      throw new NotFoundException({ message: 'La lista esta vacia' });
    }

    return list;
  }

  async save(dto: VisitRecordDto): Promise<any> {
    const visitRecord = await this.visitRecordRepository.create(dto);
    await this.visitRecordRepository.save(visitRecord);

    return { message: 'Visita guardada' };
  }
}
