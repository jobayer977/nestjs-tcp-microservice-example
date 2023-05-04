import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3200);
  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap();
