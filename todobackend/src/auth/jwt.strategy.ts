import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-local";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(){
    super({
        secretOrkey: 'SECRET', // protect this,move env var
        ignoreExpiration:false,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    })
  }
  async validate(payload:any){
      return {
          id:payload.sub,
          name:payload.name,
      };
  }
}