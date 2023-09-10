import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { SignupService } from './auth.service';
import { SignupDto } from './auth.dto';
import { User } from './auth.model';
import { LoginDto } from './auth1.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoaclAuthGaurd } from './local-auth.gaurd';
import { AuthenticatedGaurd } from './authenticated.gaurd';
import { jwtAuthGaurd } from './jwt-auth.gaurd';
@Controller('auth')
export class SignupController {
    constructor(
        private readonly signupService:SignupService
    ){}

    // @Get()
    // async getUsers():Promise<Signup[]>{
    //     return this.signupService.getUser();
    // }
    @UseGuards(LoaclAuthGaurd)
    @Post('login')
    async find( @Request() req){
          console.log(req.user);
          return this.signupService.login(req.user);
    }
    // async find(@Body()  createtdto:LoginDto):Promise<any>{
    //       const jp= await this.signupService.findone(createtdto);
    //     //   console.log("aman");
    //         const data={
    //             UserName:jp.UserName,
    //             id:jp._id
    //         }
    //       //  console.log(data)
    //     //   return jp.UserName;
    // }
    @Post('signup')
    async createUser(@Body()  createdto:SignupDto){
          return this.signupService.createUser(createdto);
    }

    // testing
    @UseGuards(jwtAuthGaurd)
    @Get('protected')
    gethello(@Request() req){
        return req.user;
    }

    // @Post(':userId')
    // async updateUser(@Param('userId') userId:string , @Body() createdto:SignupDto):Promise<Signup>{
    //     return this.signupService.updateUser(userId,createdto);
    // }
    // @Get(':userId')
    // async getUser(@Param('userId') userId:string):Promise<Signup[]>{
    //     return this.signupService.getUserById(userId);
    // }
}
