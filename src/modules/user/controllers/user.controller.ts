import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../../../domain/dtos';
import { UserCreateUseCase } from '../use-cases/create/user-create.use-case';
import { UserEntity } from '../../../domain/entities';

@Controller('user')
export class UserController {
  constructor(private readonly userCreateUseCase: UserCreateUseCase) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userCreateUseCase.execute(createUserDto);
  }
}
