import { User } from './../entities/user.entity';
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { Observable, of, from } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(private _userService: UserService) {}

  @Get('all')
  findAll(): Observable<User[]> {
    let users = this._userService.findAll();
    return from(users);
  }

  @Post('create')
  create(@Body() user: User) {
    this._userService.createUser(user);
  }

  @Get(':id')
  findUser(@Param('id') id: number) {
    console.log(id);
    return from(this._userService.findUser(id));
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return from(this._userService.deleteUser(id));
  }
}
