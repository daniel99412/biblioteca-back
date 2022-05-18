import { MembershipEntity } from 'src/membership/membership.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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
}
