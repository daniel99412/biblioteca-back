import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevolutionDetailController } from './devolution-detail.controller';
import { DevolutionDetailEntity } from './devolution-detail.entity';
import { DevolutionDetailRepository } from './devolution-detail.repository';
import { DevolutionDetailService } from './devolution-detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([DevolutionDetailEntity])],
  providers: [DevolutionDetailService, DevolutionDetailRepository],
  controllers: [DevolutionDetailController],
})
export class DevolutionDetailModule {}
