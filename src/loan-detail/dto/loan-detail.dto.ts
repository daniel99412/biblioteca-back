import { CopyEntity } from 'src/copy/copy.entity';
import { LoanEntity } from 'src/loan/loan.entity';

export class LoanDetailDto {
  idLoanDetail?: number;
  loan?: LoanEntity;
  copy?: CopyEntity;
  returnDate?: Date;
}
