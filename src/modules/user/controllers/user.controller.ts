import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../../../domain/dtos';
import { UserService } from '../services/user.service';
import { UserEntity } from '../../../domain/entities';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAllUsers(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findUserById(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.findById(id);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    updateUserDto.id = id;
    return this.userService.update(updateUserDto);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.remove(id);
  }
}
