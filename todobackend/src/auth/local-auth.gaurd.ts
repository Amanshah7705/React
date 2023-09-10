import { AuthGuard } from "@nestjs/passport";
import {Strategy} from 'passport-local'
import { ExecutionContext, Injectable } from "@nestjs/common";
@Injectable()
export class LoaclAuthGaurd extends AuthGuard('local'){
    
}