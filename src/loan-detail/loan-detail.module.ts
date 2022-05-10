import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanDetailController } from './loan-detail.controller';
import { LoanDetailEntity } from './loan-detail.entity';
import { LoanDetailRepository } from './loan-detail.repository';
import { LoanDetailService } from './loan-detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([LoanDetailEntity])],
  providers: [LoanDetailService, LoanDetailRepository],
  controllers: [LoanDetailController],
})
export class LoanDetailModule {}
