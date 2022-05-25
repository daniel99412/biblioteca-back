import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanDto } from './dto/loan.dto';
import { LoanEntity } from './loan.entity';
import { LoanRepository } from './loan.repository';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(LoanEntity)
    private loanRepository: LoanRepository,
  ) {}

  async findAll(): Promise<LoanEntity[]> {
    const list = await this.loanRepository.find();

    if (!list.length) {
      return [];
    }

    return list;
  }

  async findById(id: number): Promise<LoanEntity> {
    const loan = await this.loanRepository.findOne(id);

    if (!loan) {
      throw new NotFoundException({
        message: `No existe un prestamo con el id ${id}`,
      });
    }

    return loan;
  }

  async save(dto: LoanDto): Promise<any> {
    const loan = await this.loanRepository.create(dto);
    const loanToReturn = await this.loanRepository.save(loan);

    return loanToReturn;
  }
}
