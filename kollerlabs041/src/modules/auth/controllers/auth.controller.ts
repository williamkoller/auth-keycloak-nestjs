import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  @HttpCode(HttpStatus.OK)
  public helloWorld(): string {
    return 'Hello World';
  }
}
