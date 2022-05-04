import { UserEntity } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'membresias' })
export class MembershipEntity {
  @PrimaryGeneratedColumn({ name: 'id_membresia' })
  idMembership: number;

  @Column({
    name: 'fecha_nacimiento',
    type: 'date',
    nullable: false,
  })
  birthdate: Date;

  @Column({
    name: 'domicilio',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  address: string;

  @Column({
    name: 'estado',
    type: 'varchar',
    length: '13',
    nullable: false,
  })
  status: string;

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'id_usuario' })
  user: UserEntity;

  @Column({
    name: 'fecha_expiracion',
    type: 'timestamp',
    nullable: false,
  })
  expirationDate: Date;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  email: string;

  @Column({
    name: 'fecha_expedicion',
    type: 'timestamp',
    nullable: false,
  })
  expeditionDate: Date;
}
