import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-users')
  getUser(): Promise<User[]> {
    return this.appService.findAll();
  }
  @Get('create-user')
  createUser() {
    return this.appService.create({
      username: 'kerschbaumerStefan',
      firstname: 'Stefan',
      lastname: 'Kerschbaumer'
    });
  }
}
