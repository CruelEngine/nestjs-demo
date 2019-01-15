import { User } from './../entities/user.entity';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { Observable, of, from } from 'rxjs';
import { UserDTO } from '../dtos/user.dto';
import { create } from 'domain';

@Controller('user')
export class UserController {
  constructor(private _userService: UserService) {}

  @Get('all')
  findAll(): Observable<User[]> {
    let users = this._userService.findAll();
    return from(users);
  }

  @Post('/create')
  create(@Body() user: User) {
    this._userService.createUser(user);
  }
}
