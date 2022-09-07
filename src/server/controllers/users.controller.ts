import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('create')
    createUser(){
        return this.usersService.createUser()
    }

    @Get()
    findAll(){
        return this.usersService.findAll()
    }

    @Get(':id')
    findOneById(@Param() params){
        return this.usersService.findOneById(params.id)
    }
}