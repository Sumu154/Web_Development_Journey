import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}


  // POST /users
  @Post('/')
  async createUser(@Body() payload: any): Promise<IUser> {
    return this.userService.createUser(payload);
  }

  // GET /users
  @Get('/')
  async getAllUsers(): Promise<IUser[]> {
    return this.userService.getUsers();
  }
}
