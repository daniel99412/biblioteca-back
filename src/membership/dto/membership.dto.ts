import { UserEntity } from 'src/user/user.entity';

export class MembershipDto {
  idMembership?: number;
  birthdate?: Date;
  address?: string;
  status?: string;
  user?: UserEntity;
  expirationDate?: Date;
  email?: string;
  expeditionDate?: Date;
}
