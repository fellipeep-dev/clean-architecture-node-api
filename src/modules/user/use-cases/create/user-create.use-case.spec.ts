import { IBaseUseCase } from 'src/common';
import { CreateUserDto } from 'src/domain/dtos';
import { UserEntity } from 'src/domain/entities';

interface InMemoryRepository {
  create(data: CreateUserDto): Promise<UserEntity>;
}

class InMemoryRepositoryMock implements InMemoryRepository {
  dataBase = [];

  async create(data: CreateUserDto): Promise<UserEntity> {
    this.dataBase.push(data);

    return this.dataBase[0];
  }
}

export class TestUserCreateUseCase
  implements IBaseUseCase<UserEntity, CreateUserDto>
{
  constructor(private readonly inMemoryRepository: InMemoryRepository) {}

  async execute(data: CreateUserDto): Promise<UserEntity> {
    return this.inMemoryRepository.create(data);
  }
}

describe('UserCreateUseCase', () => {
  let sut: TestUserCreateUseCase;

  beforeEach(async () => {
    let inMemoryRepositoryMock = new InMemoryRepositoryMock();
    sut = new TestUserCreateUseCase(inMemoryRepositoryMock);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });
});
