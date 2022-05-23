import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeDto } from './dto/employee.dto';
import { LoginDto } from './dto/login.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async findAll() {
    return this.employeeService.findAll();
  }

  @Get('rfc/:rfc')
  async findByRfc(@Param('rfc') rfc: string) {
    return this.employeeService.findByRfc(rfc);
  }

  @Get('name/:name')
  async findByName(@Param('name') name: string) {
    return this.employeeService.findByName(name);
  }

  @Post()
  async create(@Body() dto: EmployeeDto) {
    return this.employeeService.save(dto);
  }

  @Put(':rfc')
  async update(@Param('rfc') rfc: string, @Body() dto: EmployeeDto) {
    return this.employeeService.update(rfc, dto);
  }

  @Put()
  async login(@Body() dto: LoginDto) {
    console.log('estoy en login');
    return this.employeeService.login(dto);
  }
}
