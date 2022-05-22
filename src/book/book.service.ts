import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './book.entity';
import { BookRepository } from './book.repository';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private bookRepository: BookRepository,
  ) {}

  async findAll(): Promise<BookEntity[]> {
    const list = await this.bookRepository.find();

    if (!list.length) {
      throw new NotFoundException({ message: 'La lista esta vacia' });
    }
    return list;
  }

  async findById(id: string): Promise<BookEntity> {
    const book = await this.bookRepository.findOne(id);

    if (!book) {
      throw new NotFoundException({
        message: `No existe libro con el id ${id}`,
      });
    }
    return book;
  }

  async findByAutor(autor: string): Promise<BookEntity[]> {
    const list = await this.bookRepository.find({
      where: `autor LIKE "%${autor}%"`,
    });

    if (!list.length) {
      throw new NotFoundException({
        message: `No existen libros del autor ${autor}`,
      });
    }
    return list;
  }

  async findByName(name: string): Promise<BookEntity> {
    const book = await this.bookRepository.findOne({
      where: `nombre LIKE "%${name}%"`,
    });

    if (!book) {
      throw new NotFoundException({
        message: `No existe libro con el nombre ${name}`,
      });
    }
    return book;
  }

  async findByScdd(scdd: string): Promise<BookEntity[]> {
    const list = await this.bookRepository.find({
      where: `scdd LIKE "%${scdd}%"`,
    });

    if (!list.length) {
      throw new NotFoundException({
        message: `No hay libros con el scdd ${scdd}`,
      });
    }
    return list;
  }

  async save(dto: BookDto): Promise<any> {
    const book = this.bookRepository.create(dto);
    await this.bookRepository.save(book);

    return { message: 'Libro guardado' };
  }

  async update(id: string, dto: BookDto): Promise<any> {
    const book = await this.findById(id);

    dto.amount ? (book.amount = dto.amount) : (book.amount = book.amount);
    dto.autor ? (book.autor = dto.autor) : (book.autor = book.autor);
    dto.editorial
      ? (book.editorial = dto.editorial)
      : (book.editorial = book.editorial);

    dto.name ? (book.name = dto.name) : (book.name = book.name);
    dto.scdd ? (book.scdd = dto.scdd) : (book.scdd = book.scdd);
    dto.volume ? (book.volume = dto.volume) : (book.volume = book.volume);

    await this.bookRepository.save(book);

    return { message: 'Libro actualizado' };
  }
}
