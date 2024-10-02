import { ServiceBase } from 'src/common';
import { CreateUserDto, UpdateUserDto } from 'src/domain/dtos';
import { UserEntity } from 'src/domain/entities';
import { UserRepository } from '../repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService
  implements ServiceBase<UserEntity, CreateUserDto, UpdateUserDto>
{
  constructor(private readonly userRepository: UserRepository) {}

  create(dto: CreateUserDto): Promise<UserEntity> {
    const user = this.userRepository.create(dto);

    return user;
  }
}
