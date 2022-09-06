import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    @Render('index')
    home() {
        return {
            title: 'index',
            users: {
                name: 'John',
                title: 'Mr.'
            }
        };
    }
}