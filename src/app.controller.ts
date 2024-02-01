/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService, User } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  getUsers(): User[] {
    return this.appService.getUser();
  }

  @Get('/user/:id')
  getUser(@Param('id') id: number) {
    return this.appService.detailUser(id);
  }

  @Post('/user')
  addUser(@Body() user: User): User[] {
    return this.appService.addUser(user);
  }

  @Put('/user/:id')
  updateUser(
    @Param('id') id: number,
    @Body() updatedUser: Partial<User>,
  ): User | string {
    return this.appService.updateUser(id, updatedUser);
  }

  @Delete('/user/:id')
  deleteUser(@Param('id') id: number): User | string {
    return this.appService.deleteUser(id);
  }
}
