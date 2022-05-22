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

  @ManyToOne(() => BookEntity, { eager: true })
  @JoinColumn({ name: 'libro_id' })
  book: BookEntity;

  @Column({
    name: 'no_identificacion',
    type: 'varchar',
    nullable: false,
  })
  copyIdentifier: string;

  @Column({
    name: 'estado',
    type: 'varchar',
    nullable: false,
  })
  status: string;

  @Column({
    name: 'valor',
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  price: number;
}
