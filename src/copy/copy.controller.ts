import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CopyService } from './copy.service';
import { CopyDto } from './dto/copy.dto';

@Controller('copy')
export class CopyController {
  constructor(private readonly copyService: CopyService) {}

  @Get()
  async findAll() {
    return this.copyService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.copyService.findById(id);
  }

  @Get('book/:book')
  async findbyBook(@Param('book') book: string) {
    return this.copyService.findByBook(book);
  }

  @Post()
  async create(@Body() dto: CopyDto) {
    return this.copyService.save(dto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: CopyDto) {
    return this.copyService.update(id, dto);
  }
}
