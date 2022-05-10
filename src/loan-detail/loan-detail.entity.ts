import { CopyEntity } from 'src/copy/copy.entity';
import { LoanEntity } from 'src/loan/loan.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'detalles_prestamos' })
export class LoanDetailEntity {
  @PrimaryGeneratedColumn({ name: 'id_detalle_prestamo' })
  idLoanDetail: number;

  @ManyToOne(() => LoanEntity)
  @JoinColumn({ name: 'id_prestamo' })
  loan: LoanEntity;

  @ManyToOne(() => CopyEntity)
  @JoinColumn({ name: 'id_ejemplar' })
  copy: CopyEntity;

  @Column({
    name: 'fecha_entrega',
    type: 'datetime',
    nullable: false,
  })
  returnDate: Date;
}
