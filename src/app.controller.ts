import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pinataSDK = require('@pinata/sdk');
// const pinata = pinataSDK('yourPinataApiKey', 'yourPinataSecretApiKey');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
