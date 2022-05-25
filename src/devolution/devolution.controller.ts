import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DevolutionService } from './devolution.service';
import { DevolutionDto } from './dto/devolution.dto';

@Controller('devolution')
export class DevolutionController {
  constructor(private readonly devolutionService: DevolutionService) {}

  @Get()
  async findAll() {
    return this.devolutionService.findAll();
  }

  @Get('loan/:loan')
  async findByLoan(@Param('loan') loan: number) {
    return this.devolutionService.fondByLoan(loan);
  }

  @Post()
  async create(@Body() dto: DevolutionDto) {
    return this.devolutionService.save(dto);
  }
}
