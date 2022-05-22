import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookService } from 'src/book/book.service';
import { CopyEntity } from './copy.entity';
import { CopyRepository } from './copy.repository';
import { CopyDto } from './dto/copy.dto';

@Injectable()
export class CopyService {
  constructor(
    @InjectRepository(CopyEntity)
    private copyRepository: CopyRepository,
  ) {}

  async findAll(): Promise<CopyEntity[]> {
    const list = await this.copyRepository.find();

    if (!list.length) {
      throw new NotFoundException({ message: 'La lista esta vacia' });
    }

    return list;
  }

  async findById(id: number): Promise<CopyEntity> {
    const copy = await this.copyRepository.findOne(id);

    if (!copy) {
      throw new NotFoundException({
        message: `No existe un ejemplar con el id ${id}`,
      });
    }

    return copy;
  }

  async findByBook(book: string): Promise<CopyEntity[]> {
    const list = await this.copyRepository.find({
      where: `id_libro LIKE '%${book}%'`,
    });

    if (!list.length) {
      throw new NotFoundException({
        message: `No existen ejemplares del libro`,
      });
    }
    return list;
  }

  async save(dto: CopyDto): Promise<any> {
    const copy = await this.copyRepository.create(dto);
    await this.copyRepository.save(copy);

    return { message: 'Copia guardada' };
  }

  async update(id: number, dto: CopyDto): Promise<any> {
    const copy = await this.findById(id);

    dto.book ? (copy.book = dto.book) : (copy.book = copy.book);
    dto.copyIdentifier
      ? (copy.copyIdentifier = dto.copyIdentifier)
      : (copy.copyIdentifier = copy.copyIdentifier);
    dto.status ? (copy.status = dto.status) : (copy.status = copy.status);

    await this.copyRepository.save(copy);

    return { message: 'Ejemplar guardada' };
  }
}
