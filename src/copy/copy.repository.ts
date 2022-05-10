import { EntityRepository, Repository } from 'typeorm';
import { CopyEntity } from './copy.entity';

@EntityRepository(CopyRepository)
export class CopyRepository extends Repository<CopyEntity> {}
