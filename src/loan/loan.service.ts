import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanDto } from './dto/loan.dto';
import { LoanEntity } from './loan.entity';
import { LoanRepository } from './loan.repository';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(LoanRepository)
    private loanRepository: LoanRepository,
  ) {}

  async findAll(): Promise<LoanEntity[]> {
    const list = await this.loanRepository.find();

    if (!list.length) {
      throw new NotFoundException({ message: 'La lista esta vacia' });
    }

    return list;
  }

  async save(dto: LoanDto): Promise<any> {
    const loan = await this.loanRepository.create(dto);
    await this.loanRepository.save(loan);

    return { message: 'Prestamo guardado' };
  }
}
