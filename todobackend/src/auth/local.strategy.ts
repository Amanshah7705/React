import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from 'passport-local'
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { SignupService } from "./auth.service";
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
 constructor(private authService:SignupService){
    super({
      usernameField:'username',
    });
 }
  async validate(username:string,password:string):Promise<any>{
     const data={
      UserName:username,
      Password:password
     }
     const user = await this.authService.findone(data);
     if(!user){
       throw new UnauthorizedException();
     }
     return user;
  }
}