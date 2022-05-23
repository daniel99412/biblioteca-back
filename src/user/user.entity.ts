import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuarios' })
export class UserEntity {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  idUser: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    length: '100',
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    name: 'telefono',
    type: 'varchar',
    length: '10',
    nullable: false,
  })
  telephone: string;

  @Column({
    name: 'tipo',
    type: 'varchar',
    length: '13',
    nullable: false,
  })
  type: string;

  @Column({
    name: 'estado',
    type: 'int',
    nullable: false,
    default: '1',
  })
  status: number;
}
