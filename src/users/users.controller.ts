import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserDto } from "src/database/dto/user.dto";

@Controller("users")
export class UsersController {
       constructor(private readonly usersService: UsersService) {}

       @Post()
       Add(@Body() body:UserDto):Promise<string> {
              return this.usersService.Add(body);
       }

       @Get() 
       findAll() {
              return this.usersService.findAll();
       }

       @Get("/:id")
       findOne(@Param("id") id: string) {
              return this.usersService.findID(id);
       }

       @Delete("/:id")
       remove(id: string) {
              return this.usersService.reomveItem(id);
       }

       @Put("/:id")
       update(@Param("id") id:string, @Body() body:UserDto) {
              return this.usersService.update(id,body)
       }

       @Post("/search")
       search(@Query("name") name: string) {
              return this.usersService.search(name);
       }

}
