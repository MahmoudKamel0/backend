import { BadRequestException, Injectable, Param } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDto } from "src/database/dto/user.dto";
import { User } from "src/database/schema/user.schema";

@Injectable()
export class UsersService {
       constructor (@InjectModel(User.name) private userModel: Model<User>) {}

       public async Add(body:UserDto):Promise<string> {
              const existingUser = await this.userModel.findOne({ email: body.email });

              // if find reapet email return stutas 400
              if (existingUser) {
                     return new BadRequestException('already mail used!').message;
              }

              this.userModel.create(body)
              return "succeeful send data user"
       }

       public findAll() {
              return this.userModel.find()
       }

       public findID(id:string) {
              return this.userModel.findOne({ _id: id })
       }

       public reomveItem(id:string) {
              return this.userModel.deleteOne({ _id: id });
       }

       public update(@Param("id") id:string, body:UserDto) {
              return this.userModel.updateOne({ _id: id },{$set: body},{new: true})
       }

       public async search(key:string) {
              const keyword = {
                     $or : [
                            {firstName: { $regex: key, $options: "i" }},
                            {lastName: { $regex: key, $options: "i" }},
                            {email: { $regex: key, $options: "i" }},
                     ]
              } 

              const search = await this.userModel.find(keyword).exec();
              return search.length > 0 ? search : "not found name";
       }
}
 