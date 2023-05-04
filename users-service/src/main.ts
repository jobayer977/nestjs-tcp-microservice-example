import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options:{
      host: '127.0.0.1',
      port: 4200
    }
  })
  
  await app.startAllMicroservices()
  await app.listen(4200);
  console.log(`App is running on port ${await app.getUrl()}`)
}
bootstrap();
