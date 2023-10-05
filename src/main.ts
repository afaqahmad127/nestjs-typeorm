import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { setUpSwaggerConfig } from './common/swagger.config';

async function mainApp() {
  const app: INestApplication = await NestFactory.create(AppModule);
  setUpSwaggerConfig(app);
  await app.listen(process.env.PORT);
  console.info(`server running on ${await app.getUrl()} `);
}
mainApp();
