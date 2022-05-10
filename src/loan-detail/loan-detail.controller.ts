import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanDetailDto } from './dto/loan-detail.dto';
import { LoanDetailService } from './loan-detail.service';

@Controller('loan-detail')
export class LoanDetailController {
  constructor(private readonly loanDetailService: LoanDetailService) {}

  @Get()
  async findAll() {
    return this.loanDetailService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.loanDetailService.findById(id);
  }

  @Get('loan/:loan')
  async findByLoan(@Param('loan') loan: number) {
    return this.loanDetailService.findByLoan(loan);
  }

  @Post()
  async create(@Body() dto: LoanDetailDto) {
    return this.loanDetailService.save(dto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: LoanDetailDto) {
    return this.loanDetailService.update(id, dto);
  }
}
