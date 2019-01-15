import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepositoryToken')
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    let users: User[] = await this.userRepository.find();
    return users;
  }

  async createUser(user: User): Promise<void> {
    this.userRepository.create(user);
  }
}
