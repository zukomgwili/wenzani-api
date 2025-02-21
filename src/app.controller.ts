import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api/tasks")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTasks(): Task[] {
    return this.appService.getTasks();
  }
}
