import { Body, Controller, Get, Post } from '@nestjs/common';
import { VisitRecordDto } from './dto/visit-record.dto';
import { VisitRecordService } from './visit-record.service';

@Controller('visit-record')
export class VisitRecordController {
  constructor(private readonly visitRecordService: VisitRecordService) {}

  @Get()
  async findAll() {
    return this.visitRecordService.findAll();
  }

  @Post()
  async create(@Body() dto: VisitRecordDto) {
    return this.visitRecordService.save(dto);
  }
}
