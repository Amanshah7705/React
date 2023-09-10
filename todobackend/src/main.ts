import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appendFile } from 'fs';
import * as session from 'express-session'
import * as passport from 'passport'
const cors = require("cors");
async function bootstrap() {
  const app =await NestFactory.create(AppModule,{cors:true});
  app.use(cors({
    origin:"http://localhost:3000"
  }))

  await app.listen(8000);
}
bootstrap();
