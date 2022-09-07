import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ){}

  async createUser(): Promise<User> {
    let record = {
        firstName: "Timber",
        lastName: "Saw",
        isActive: true
    }    
    return this.usersRepository.save(record);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  findOneById(id: number): Promise<User> {
    return this.usersRepository.findOneByOrFail({id})
  }
}