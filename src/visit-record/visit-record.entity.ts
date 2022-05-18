import { UserEntity } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'visitas' })
export class VisitRecordEntity {
  @PrimaryGeneratedColumn({ name: 'id_visita' })
  idVisitRecord: number;

  @ManyToOne(() => UserEntity, { eager: true })
  @JoinColumn({ name: 'id_usuario' })
  user: UserEntity;

  @Column({
    name: 'fecha_visita',
    type: 'timestamp',
    nullable: false,
  })
  visitDate: Date;
}
