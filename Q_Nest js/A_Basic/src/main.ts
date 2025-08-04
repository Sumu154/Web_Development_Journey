// src/main.ts
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import * as path from 'path';
import * as express from 'express';
import * as cors from 'cors';
import { envVars } from './app/config/env.config';
import { connectDB } from './app/config/db.config';


async function bootstrap() {
  await connectDB(); 
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Enable CORS
  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://client-side-seven-xi.vercel.app',
    ],
    credentials: true,
  });

  // View engine
  app.useStaticAssets(path.join(__dirname, 'public'));
  app.setBaseViewsDir(path.join(__dirname, 'views'));
  app.setViewEngine('ejs');

  // Parsers
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.set('trust proxy', 1);

  // Sessions
  // app.use(
  //   session({
  //     secret: envVars.EXPRESS_SESSION_SECRET,
  //     resave: false,
  //     saveUninitialized: false,
  //   }),
  // );

  // Passport
  // app.use(passport.initialize());
  // app.use(passport.session());

  // Global validation pipe (you can use Zod too, if integrated manually)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Global route prefix
  app.setGlobalPrefix('api/v1');

  // Start server
  const server = await app.listen(envVars.PORT || 5000);
  console.log(`Server is running at port ${envVars.PORT || 5000}`);




  // ---- Graceful Shutdown Handlers ---- //
  const shutdown = async (signal: string) => {
    console.log(`${signal} signal received... Shutting down gracefully.`);
    await app.close();
    process.exit(1);
  };


  process.on('SIGTERM', () => {
    console.log("SIGTERM signal recieved... Server shutting down..");
    shutdown('SIGTERM')
  });
  process.on('SIGINT', () => {
    console.log("SIGINT signal recieved... Server shutting down..");
    shutdown('SIGINT')
  });

  process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    shutdown('unhandledRejection');
  });

  process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    shutdown('uncaughtException');
  });
}


bootstrap();


// Unhandler rejection error
// Promise.reject(new Error("I forgot to catch this promise"))

// Uncaught Exception Error
// throw new Error("I forgot to handle this local erro")


/**
 * unhandled rejection error
 * uncaught rejection error
 * signal termination sigterm
 */
