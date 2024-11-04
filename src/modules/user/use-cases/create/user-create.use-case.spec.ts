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
    const inMemoryRepositoryMock = new InMemoryRepositoryMock();
    sut = new TestUserCreateUseCase(inMemoryRepositoryMock);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should create a new user and return a UserEntity', async () => {
    // Dados fictícios para criar um usuário
    const createUserDto: CreateUserDto = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    };

    // Chama a função execute
    const result = await sut.execute(createUserDto);

    expect(result).toHaveProperty('name', 'Test User');
    expect(result).toHaveProperty('email', 'test@example.com');
    expect(result).toHaveProperty('password', 'password123');
  });
});
