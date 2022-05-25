import { EntityRepository, Repository } from 'typeorm';
import { DevolutionDetailEntity } from './devolution-detail.entity';

@EntityRepository(DevolutionDetailRepository)
export class DevolutionDetailRepository extends Repository<DevolutionDetailEntity> {}
