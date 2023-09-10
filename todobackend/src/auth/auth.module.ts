import { Module } from '@nestjs/common';
import { SignupController } from './auth.controller';
import { SignupService } from './auth.service';
import {MongooseModule} from '@nestjs/mongoose'
import { Schema } from 'mongoose';
import { UserSchema } from './auth.model';
import { UserRepo } from './auth.repo';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerilizatior } from './seassion.serilizer';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports:[

      MongooseModule.forFeature([
           {
            name:"User",
            schema:UserSchema
           }
          ]),PassportModule,
          SignupModule,
          JwtModule.register({
            secret:'SECRET',  //put env variables
            signOptions:{expiresIn:'300s'},

          })
  ],
  controllers: [SignupController],
  providers: [SignupService,UserRepo,LocalStrategy,JwtStrategy],
  exports:[SignupService]
})
export class SignupModule {

}
