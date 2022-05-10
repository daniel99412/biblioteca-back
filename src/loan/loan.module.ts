import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanController } from './loan.controller';
import { LoanEntity } from './loan.entity';
import { LoanRepository } from './loan.repository';
import { LoanService } from './loan.service';

@Module({
  imports: [TypeOrmModule.forFeature([LoanEntity])],
  providers: [LoanService, LoanRepository],
  controllers: [LoanController],
})
export class LoanModule {}
