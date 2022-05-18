import { BookEntity } from 'src/book/book.entity';

export class CopyDto {
  idCopy?: number;
  book?: BookEntity;
  copyIdentifier?: string;
  status?: string;
  price?: number;
}
