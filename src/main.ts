import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Config Import
import { Config } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //Creates a Nest application by returning a INestApplication Object
  await app.listen(Config.PORT); //Listens to the port provided . Replace the port to a different one using a new file maybe config.ts ?
}
bootstrap();
