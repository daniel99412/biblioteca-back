import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanDetailDto } from './dto/loan-detail.dto';
import { LoanDetailEntity } from './loan-detail.entity';
import { LoanDetailRepository } from './loan-detail.repository';

@Injectable()
export class LoanDetailService {
  constructor(
    @InjectRepository(LoanDetailRepository)
    private loanDetailRepository: LoanDetailRepository,
  ) {}

  async findAll(): Promise<LoanDetailEntity[]> {
    const list = await this.loanDetailRepository.find();

    if (!list.length) {
      throw new NotFoundException({ message: 'La lista esta vacia' });
    }

    return list;
  }

  async findById(id: number): Promise<LoanDetailEntity> {
    const loanDetail = await this.loanDetailRepository.findOne(id);

    if (!loanDetail) {
      throw new NotFoundException({
        message: `No existe el detalle con el id ${id}`,
      });
    }

    return loanDetail;
  }

  async findByLoan(loan: number): Promise<LoanDetailEntity[]> {
    const list = await this.loanDetailRepository.find({
      where: `id_prestamo = ${loan}`,
    });

    if (!list.length) {
      throw new NotFoundException({
        message: 'No existen detalles para el prestamo',
      });
    }
    return list;
  }

  async save(dto: LoanDetailDto): Promise<any> {
    const loanDetail = await this.loanDetailRepository.create(dto);
    await this.loanDetailRepository.save(loanDetail);

    return { message: 'Detalle guardado' };
  }

  async update(id: number, dto: LoanDetailDto): Promise<any> {
    const loanDetail = await this.findById(id);

    dto.copy
      ? (loanDetail.copy = dto.copy)
      : (loanDetail.copy = loanDetail.copy);
    dto.returnDate
      ? (loanDetail.returnDate = dto.returnDate)
      : (loanDetail.returnDate = loanDetail.returnDate);

    await this.loanDetailRepository.save(dto);

    return { message: 'Detalle guardado' };
  }
}
