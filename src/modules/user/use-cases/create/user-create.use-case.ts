import { IBaseUseCase } from 'src/common';
import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities';
import { CreateUserDto } from 'src/domain/dtos';
import { IUserRepository } from 'src/repositories/user';

@Injectable()
export class UserCreateUseCase
  implements IBaseUseCase<UserEntity, CreateUserDto>
{
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(data: CreateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.create({
      ...data,
    });

    return user;
  }
}
