/*
https://docs.nestjs.com/controllers#controllers
*/

import {
	ClientProxy,
	ClientProxyFactory,
	Transport,
	Client,
} from '@nestjs/microservices';
import {
	Body,
	Controller,
	Get,
	Inject,
	Param,
	Post,
	Put,
} from '@nestjs/common';

import { firstValueFrom } from 'rxjs';

@Controller('users')
export class UsersController {
	constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}
	@Get()
	async findAll() {
		return this.client.send({ cmd: 'GET_USERS' }, '');
	}

	@Post()
	create(@Body('name') name: string) {
		const payload = { name: name };
		return this.client.send({ cmd: 'CREATE_USER' }, payload);
	}

	@Put(':id')
	async update(@Body('name') name: string, @Param('id') id: string) {
		this.client.emit('user.updated', { name: name, id: id });
	}
}
