import { IsEmail, IsNotEmpty, IsPhoneNumber, IsStrongPassword, IsUUID } from "class-validator";

export class UserDto {
       // @IsNotEmpty()
       // @IsUUID()
       // ID: string;

       @IsNotEmpty()
       firstName: string;

       @IsNotEmpty()
       lastName: string;
       
       @IsNotEmpty()
       age: number;

       @IsNotEmpty()
       location: string;

       @IsNotEmpty()
       @IsEmail()
       email: string;

       @IsNotEmpty()
       @IsStrongPassword()
       password: string;

       @IsNotEmpty()
       @IsPhoneNumber()
       phone: string;
}