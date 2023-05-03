import { ClientsModule, Transport } from '@nestjs/microservices';

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'USER_SERVICE',
				transport: Transport.TCP,
				options: {
					host: '127.0.0.1',
					port: 3000,
				},
			},
		]),
	],
	controllers: [UsersController],
	providers: [],
})
export class AppModule {}
