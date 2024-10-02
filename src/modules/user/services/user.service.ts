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

  async create(dto: CreateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.create(dto);

    return user;
  }

  async findAll(): Promise<UserEntity[]> {
    const data = await this.userRepository.findAll();

    return data;
  }

  async findById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findById(id);

    return user;
  }

  async update(dto: UpdateUserDto): Promise<UserEntity> {
    const update = await this.userRepository.update(dto);

    return update;
  }

  async remove(id: string): Promise<UserEntity> {
    const remove = await this.userRepository.delete(id);

    return remove;
  }
}
