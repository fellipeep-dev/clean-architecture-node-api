import { Module, ModuleMetadata } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserCreateUseCase } from './use-cases';
import { IUserRepository, UserRepository } from 'src/repositories/user';
import { PrismaModule } from 'src/infra/database/prisma/prisma.module';

export const userModuleMock: ModuleMetadata = {
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    UserCreateUseCase,
    { provide: IUserRepository, useClass: UserRepository },
  ],
  exports: [UserCreateUseCase],
};

@Module(userModuleMock)
export class UserModule {}
