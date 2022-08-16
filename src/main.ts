import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000, () =>
    console.log('Server is running at: http://localhost:4000'),
  );
};

bootstrap();
