import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";


@Module({
       imports: [UsersModule, MongooseModule.forRoot("mongodb://localhost:27017/"), ConfigModule.forRoot({ isGlobal: true }),],
       controllers: [AppController],
       providers: [AppService],
})
export class AppModule {}
