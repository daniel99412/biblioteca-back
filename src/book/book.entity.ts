import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'libros' })
export class BookEntity {
  @PrimaryGeneratedColumn({ name: 'id_libro' })
  idBook: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  autor: string;

  @Column({
    type: 'varchar',
    length: 3,
    nullable: false,
  })
  scdd: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  editorial: string;

  @Column({
    name: 'cantidad',
    type: 'decimal',
    nullable: false,
    default: 0,
  })
  amount: number;

  @Column({
    name: 'tomo',
    type: 'varchar',
    length: 2,
    nullable: false,
  })
  volume: string;
}
