import { Body, Controller, Inject, Post } from "@nestjs/common";
import { LoginDTO, RegisterDTO } from "./model";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";


@Controller('auth')
export class AuthController {
    constructor(@Inject('USER_SERVICE') private client:ClientProxy) {}

    @Post('login')
    async login(@Body() payload:LoginDTO) {
        return this.client.send({cmd:'AUTH_LOGIN'}, payload)
    }

    @Post('register')
    async register(@Body() payload:RegisterDTO) {
        return this.client.send({cmd:'AUTH_REGISTER'}, payload)
    }
}