import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembershipController } from './membership.controller';
import { MembershipEntity } from './membership.entity';
import { MembershipRepository } from './membership.repository';
import { MembershipService } from './membership.service';

@Module({
  imports: [TypeOrmModule.forFeature([MembershipEntity])],
  providers: [MembershipService, MembershipRepository],
  controllers: [MembershipController],
})
export class MembershipModule {}
