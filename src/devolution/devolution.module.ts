import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevolutionController } from './devolution.controller';
import { DevolutionEntity } from './devolution.entity';
import { DevolutionRepository } from './devolution.repository';
import { DevolutionService } from './devolution.service';

@Module({
  imports: [TypeOrmModule.forFeature([DevolutionEntity])],
  providers: [DevolutionService, DevolutionRepository],
  controllers: [DevolutionController],
})
export class DevolutionModule {}
