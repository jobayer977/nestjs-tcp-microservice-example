/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './model';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
	USERS = [
		{
			id: 1,
			name: 'John Doe',
		},
	];

	@Post()
	@MessagePattern({ cmd: 'CREATE_USER' })
	create(@Body() request: CreateUserDTO) {
		this.USERS.push({
			id: this.USERS.length + 1,
			name: request.name,
		});
		return this.USERS[this.USERS.length - 1];
	}

	@Get()
	@MessagePattern({ cmd: 'GET_USERS' })
	findAll() {
		return this.USERS;
	}
}
