import { EntityRepository, Repository } from 'typeorm';
import { MembershipEntity } from './membership.entity';

@EntityRepository(MembershipEntity)
export class MembershipRepository extends Repository<MembershipEntity> {}
