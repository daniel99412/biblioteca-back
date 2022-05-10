import { MembershipDto } from 'src/membership/dto/membership.dto';

export class LoanDto {
  idLoan?: number;
  membership?: MembershipDto;
  loanDate?: Date;
  returnDate?: Date;
}
