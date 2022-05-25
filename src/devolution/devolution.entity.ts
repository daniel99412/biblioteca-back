import { CopyEntity } from 'src/copy/copy.entity';
import { LoanEntity } from 'src/loan/loan.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'devoluciones' })
export class DevolutionEntity {
  @PrimaryGeneratedColumn({ name: 'id_devolucion' })
  idDevolution: number;

  @ManyToOne(() => LoanEntity, { eager: true })
  @JoinColumn({ name: 'prestamo_id' })
  loan: LoanEntity;

  @Column({
    name: 'fecha_devolucion',
    type: 'timestamp',
    nullable: false,
  })
  devolutionDate: Date;
}
