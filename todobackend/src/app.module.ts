import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {SignupModule} from './auth/auth.module'
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017'
    ),
     SignupModule
  ],
})
export class AppModule {}
