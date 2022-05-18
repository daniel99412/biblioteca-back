import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'empleados' })
export class EmployeeEntity {
  @PrimaryColumn()
  rfc: string;

  @Column({
    name: 'nombre',
    type: 'varchar',
    length: '100',
    nullable: false,
    unique: true,
  })
  name: string;

  @CreateDateColumn({
    name: 'fecha_de_ingreso',
    nullable: false,
  })
  admissionDate: Date;

  @Column({
    name: 'telefono',
    type: 'varchar',
    length: '10',
    nullable: false,
  })
  telephone: string;

  @Column({
    name: 'salario_diario',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  dailyPayment: number;

  @Column({
    name: 'cargo',
    type: 'varchar',
    length: '100',
    nullable: false,
  })
  charge: string;

  @Column({
    name: 'domicilio',
    type: 'varchar',
    length: '100',
    nullable: false,
  })
  address: string;

  @Column({
    name: 'correo_electronico',
    type: 'varchar',
    length: '100',
    nullable: false,
  })
  email: string;

  @Column({
    name: 'contrasenia',
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @Column({
    name: 'estado',
    type: 'int',
    nullable: false,
    default: 1,
  })
  status: number;
}
