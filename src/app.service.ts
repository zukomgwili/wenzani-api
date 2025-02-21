import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTasks(): Task[] {
    return [
      {description : 'Taking the kids hiking this weekend'}
    ];
  }
}
