import { User } from '@prisma/client';

export class UserEntity implements User {
  id: string;
  name: string;
  email: string;
  birthDate: Date;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
