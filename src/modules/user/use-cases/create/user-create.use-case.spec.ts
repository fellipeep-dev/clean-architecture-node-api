import { Test, TestingModule } from '@nestjs/testing';
import { UserCreateUseCase } from './user-create.use-case';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { userModuleMock } from '../../user.module';

describe('UserCreateUseCase', () => {
  let sut: UserCreateUseCase;
  let moduleRef: TestingModule;
  let prismaService: PrismaService;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule(userModuleMock).compile();

    prismaService = moduleRef.get<PrismaService>(PrismaService);

    sut = moduleRef.get<UserCreateUseCase>(UserCreateUseCase);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });
});
