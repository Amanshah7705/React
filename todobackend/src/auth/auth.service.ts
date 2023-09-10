import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User,UserModel } from './auth.model';
import { FilterQuery, Model } from 'mongoose';
import { UserRepo } from './auth.repo';
import { SignupDto } from './auth.dto';
import { LoginDto } from './auth1.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class SignupService {
    constructor(private readonly userRepo:UserRepo, private jwtService:JwtService){}
//     async getUserById(userId:string):Promise<Signup[]>{
//          return this.userRepo.findOne({userId})
//     }  
//     async getUser():Promise<Signup[]>{
//         return this.userRepo.find({});
//     }
    async createUser(data){
         this.userRepo.signup(data);
    }
    async findone(data):Promise<any>{
        
        
        const user= await this.userRepo.login(data);
        if(!user){
            throw new Error();
        }
        console.log(user);
        return user;
    }
    async login(user:any){
        const payload = {name:user.UserName,sub:user._id};
        return{
            access_token: this.jwtService.sign(payload)
        }
    }
//     async updateUser(userId:string,userupdate:SignupDto){
//          return this.userRepo.findAndUpdate({userId},userupdate);
//     }
}
