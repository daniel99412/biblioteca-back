import { EmployeeDto } from 'src/employee/dto/employee.dto';
import { MembershipDto } from 'src/membership/dto/membership.dto';

export class LoanDto {
  idLoan?: number;
  membership?: MembershipDto;
  employee?: EmployeeDto;
  loanDate?: Date;
  returnDate?: Date;
}
