import { UserRepository } from '../repositories/user.repository';
import { UserService } from './user.service';

describe('UserService', () => {
  it('Check if email exists', async () => {
    const userService = new UserService(new UserRepository());

    userService.create({
      name: 'a',
      email: 'oi',
      idade: 2,
      password: '1234',
    });
  });
});
