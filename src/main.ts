import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  // Create the NestJS application
  const app = await NestFactory.create(AppModule);
  
  // Start the application
  await app.listen(process.env.PORT ?? 3000);

  // Log the application URL and environment details for development only
  console.log(`Application is running on: ${await app.getUrl()} or http://localhost:${process.env.PORT || 3000}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Port: ${process.env.PORT || 3000}`);

  // Enable hot module replacement 
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
    console.log('Hot module replacement enabled');
  }
}
bootstrap();
