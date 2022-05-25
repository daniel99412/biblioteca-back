import { CopyEntity } from 'src/copy/copy.entity';
import { DevolutionEntity } from 'src/devolution/devolution.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('detalle_devolucion')
export class DevolutionDetailEntity {
  @PrimaryGeneratedColumn({ name: 'id_detalle_devolucion' })
  idDevolutionDetail: number;

  @ManyToOne(() => DevolutionEntity, { eager: true })
  @JoinColumn({ name: 'devolucion_id' })
  devolution: DevolutionEntity;

  @ManyToOne(() => CopyEntity, { eager: true })
  @JoinColumn({ name: 'ejemplar_id' })
  copy: CopyEntity;

  @Column({
    name: 'fecha_devolucion',
    type: 'timestamp',
    nullable: false,
  })
  devolutionDate: Date;
}
