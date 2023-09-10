import { Body, HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {  UserModel } from './auth.model';
import { FilterQuery, Model } from 'mongoose';
import * as bcrypt from 'bcrypt'
import { User } from './auth.model';
import { PassportStrategy } from '@nestjs/passport';
import { LoginDto } from './auth1.dto';
@Injectable()
export class UserRepo {
    constructor(
        @InjectModel(User.name) private signupModel:Model<UserModel>
    ){}
   async signup(user:User){
        const newUser=new this.signupModel({
            FullName:user.FullName,
            Address:user.Address,
            UserName:user.UserName,
            Email:user.Email,
            Password:await bcrypt.hash(user.Password,10)

        })
        try{
            await newUser.save()
        }
        catch(err){
            if(err.message.includes('username')){
                throw new HttpException('USER NAME TAKEN',404)
            }
            if(err.message.includes('email')){
                throw new HttpException('email is taken',404)
            }
        }
    }
    async login(@Body() data){
        const {UserName, Password} = data
        const res = await this.signupModel.find({UserName: UserName,function(Password){
            const arp= bcrypt.compare(Password,Password);
        }})
         return res[0];
    }
//     async findOne(userFilterQuery:FilterQuery<Signup>):Promise<Signup[]>{
//             return this.signupModel.findOne(userFilterQuery);
//     }
//     async find(userFilterQuery:FilterQuery<Signup>):Promise<Signup[]>{
//         return this.signupModel.findOne(userFilterQuery);
// }
//     async findAndUpdate(userFilterQuery:FilterQuery<Signup>,user:Partial<Signup>):Promise<Signup>{
//         return  this.signupModel.findOneAndUpdate(userFilterQuery,user);
//     }
}
