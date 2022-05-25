import { LoanEntity } from 'src/loan/loan.entity';

export class DevolutionDto {
  idDevolution?: number;
  loan?: LoanEntity;
  devolutionDate?: Date;
}
