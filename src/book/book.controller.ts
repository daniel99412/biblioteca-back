import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.bookService.findById(id);
  }

  @Get('name/:name')
  async findByName(@Param('name') name: string) {
    return this.bookService.findByName(name);
  }

  @Get('autor/:autor')
  async findByAutor(@Param('autor') autor: string) {
    return this.bookService.findByAutor(autor);
  }

  @Get('scdd/:scdd')
  async findByScdd(@Param('scdd') scdd: string) {
    return this.findByScdd(scdd);
  }

  @Post()
  async create(@Body() dto: BookDto) {
    return this.bookService.save(dto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: BookDto) {
    return this.bookService.update(id, dto);
  }
}
