import { BookEntity } from 'src/book/book.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'ejemplares' })
export class CopyEntity {
  @PrimaryGeneratedColumn({ name: 'id_ejemplar' })
  idCopy: number;

  @ManyToOne(() => BookEntity)
  @JoinColumn({ name: 'id_libro' })
  book: BookEntity;

  @Column({
    name: 'no_ejemplar',
    type: 'int',
    nullable: false,
  })
  copyNumber: number;

  @Column({
    name: 'estado',
    type: 'varchar',
    nullable: false,
  })
  status: string;
}
