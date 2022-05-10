import { BookEntity } from 'src/book/book.entity';

export class CopyDto {
  idCopy?: number;
  book?: BookEntity;
  copyNumber?: number;
  status?: string;
}
