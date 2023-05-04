import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDTO } from "src/model";
import { UsersService } from "./users.service";
import { MessagePattern } from "@nestjs/microservices";


@Controller('users')
export class UsersController {
    constructor(private userservice:UsersService){

    }

    @Post()
    @MessagePattern({cmd:'AUTH_REGISTER'})
    crateUser(@Body() payload:CreateUserDTO){
        return this.userservice.createUser(payload)
    }

    @Get(':username')
    getUser(@Param('username') username:{username:string}){
        return this.userservice.getUserByUsername(username)
    }

    @MessagePattern({cmd:'AUTH_LOGIN'})
    getUserByUsername(payload) {
        return this.userservice.getUserByUsername(payload.username);
    }
}