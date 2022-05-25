import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoanDto } from './dto/loan.dto';
import { LoanService } from './loan.service';

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Get()
  async findAll() {
    return this.loanService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.loanService.findById(id);
  }

  @Post()
  async create(@Body() dto: LoanDto) {
    return this.loanService.save(dto);
  }
}
