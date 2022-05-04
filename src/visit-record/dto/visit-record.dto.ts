import { UserEntity } from 'src/user/user.entity';

export class VisitRecordDto {
  idVisitRecord?: number;
  user?: UserEntity;
  visitDate?: Date;
}
