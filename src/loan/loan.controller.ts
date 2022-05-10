import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoanDto } from './dto/loan.dto';
import { LoanService } from './loan.service';

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Get()
  async findAll() {
    return this.loanService.findAll();
  }

  @Post()
  async create(@Body() dto: LoanDto) {
    return this.loanService.save(dto);
  }
}
