import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitRecordController } from './visit-record.controller';
import { VisitRecordEntity } from './visit-record.entity';
import { VisitRecordRepository } from './visit-record.repository';
import { VisitRecordService } from './visit-record.service';

@Module({
  imports: [TypeOrmModule.forFeature([VisitRecordEntity])],
  providers: [VisitRecordService, VisitRecordRepository],
  controllers: [VisitRecordController],
})
export class VisitRecordModule {}
