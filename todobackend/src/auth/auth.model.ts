import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User {
       @Prop()
       FullName:string
       @Prop()
       Address:string
       @Prop({unique:true})
       UserName:string
       @Prop({unique:true})
       Email:string
       @Prop({unique:true})
       Password:string

}

export type UserModel = User & Document

export const UserSchema = SchemaFactory.createForClass(User)