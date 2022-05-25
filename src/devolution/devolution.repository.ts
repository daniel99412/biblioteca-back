import { EntityRepository, Repository } from 'typeorm';
import { DevolutionEntity } from './devolution.entity';

@EntityRepository(DevolutionRepository)
export class DevolutionRepository extends Repository<DevolutionEntity> {}
