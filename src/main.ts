import * as Sentry from '@sentry/node';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



async function bootstrap() {
  Sentry.init({ dsn: 'https://f26e5129520f4afd9a2f878e3e3b9546@sentry.io/1798077' });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
