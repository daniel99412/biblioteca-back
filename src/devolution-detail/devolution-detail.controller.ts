import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DevolutionDetailService } from './devolution-detail.service';
import { DevolutionDetailDto } from './dto/devolution-detail.dto';

@Controller('devolution-detail')
export class DevolutionDetailController {
  constructor(
    private readonly devolutionDetailService: DevolutionDetailService,
  ) {}

  @Get()
  async findAll() {
    return this.devolutionDetailService.findAll();
  }

  @Get('devolution/:devolution')
  async findByDevolution(@Param('devolution') devolution: number) {
    return this.devolutionDetailService.findByDevolution(devolution);
  }

  @Post()
  async create(@Body() dto: DevolutionDetailDto) {
    return this.devolutionDetailService.save(dto);
  }
}
