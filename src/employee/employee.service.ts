import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeDto } from './dto/employee.dto';
import { EmployeeEntity } from './employee.entity';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private employeeRepository: EmployeeRepository,
  ) {}

  async findAll(): Promise<EmployeeEntity[]> {
    const list = await this.employeeRepository.find();

    if (!list.length) {
      throw new NotFoundException({ message: 'La lista esta vacia' });
    }
    return list;
  }

  async findByRfc(rfc: string): Promise<EmployeeEntity> {
    const employee = await this.employeeRepository.findOne({
      where: `rfc LIKE "%${rfc}%"`,
    });

    if (!employee) {
      throw new NotFoundException({
        message: `No existe empleado con el RFC ${rfc}`,
      });
    }

    return employee;
  }

  async findByName(name: string): Promise<EmployeeEntity> {
    const employee = await this.employeeRepository.findOne({
      where: `nombre LIKE "%${name}%"`,
    });

    if (!employee) {
      throw new NotFoundException({
        message: `No existe empleado con el nombre ${name}`,
      });
    }
    return employee;
  }

  async save(dto: EmployeeDto): Promise<any> {
    const employee = this.employeeRepository.create(dto);
    employee.rfc = employee.rfc.toUpperCase();
    await this.employeeRepository.save(employee);

    return { message: 'Empleado guardado' };
  }

  async update(rfc: string, dto: EmployeeDto): Promise<any> {
    const employee = await this.findByRfc(rfc);

    dto.name ? (employee.name = dto.name) : (employee.name = employee.name);
    dto.telephone
      ? (employee.telephone = dto.telephone)
      : (employee.telephone = employee.telephone);
    dto.dailyPayment
      ? (employee.dailyPayment = dto.dailyPayment)
      : (employee.dailyPayment = employee.dailyPayment);
    dto.charge
      ? (employee.charge = dto.charge)
      : (employee.charge = employee.charge);
    dto.address
      ? (employee.address = dto.address)
      : (employee.address = employee.address);
    dto.email
      ? (employee.email = dto.email)
      : (employee.email = employee.email);
    dto.password
      ? (employee.password = dto.password)
      : (employee.password = employee.password);
    employee.status = dto.status;

    await this.employeeRepository.save(employee);

    return { message: 'Empleado actualizado' };
  }
}
