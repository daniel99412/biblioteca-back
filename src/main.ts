import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVER_PORT } from './config/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // server port
  const port = +configService.get<number>(SERVER_PORT) || 3000;
  app.enableCors();
  await app.listen(port);
}
bootstrap();
