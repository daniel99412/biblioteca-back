import { MembershipEntity } from 'src/membership/membership.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'prestamos' })
export class LoanEntity {
  @PrimaryGeneratedColumn({ name: 'id_pretamo' })
  idLoan: number;

  @ManyToOne(() => MembershipEntity, { eager: true })
  @JoinColumn({ name: 'id_membresia' })
  membership: MembershipEntity;

  @Column({
    name: 'fecha_solicitud',
    type: 'timestamp',
    nullable: false,
  })
  loanDate: Date;

  @Column({
    name: 'fecha_entrega',
    type: 'datetime',
    nullable: false,
  })
  returnDate: Date;
}
