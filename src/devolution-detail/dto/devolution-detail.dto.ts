import { CopyEntity } from 'src/copy/copy.entity';
import { DevolutionEntity } from 'src/devolution/devolution.entity';

export class DevolutionDetailDto {
  idDevolutionDetail: number;
  devolution: DevolutionEntity;
  copy: CopyEntity;
  devolutionDate: Date;
}
