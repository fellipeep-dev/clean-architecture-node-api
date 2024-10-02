import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from 'src/common';
import { CreateUserDto, UpdateUserDto } from 'src/domain/dtos';
import { UserEntity } from 'src/domain/entities';

@Injectable()
export class UserRepository extends RepositoryFactory<
  UserEntity,
  CreateUserDto,
  UpdateUserDto
> {
  constructor() {
    super('user');
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findById(id: string) {
    return this.prismaService.user.findFirst({
      where: { id },
    });
  }
}
