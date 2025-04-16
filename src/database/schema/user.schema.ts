import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { v4 as uuid } from "uuid";

@Schema()
export class User extends Document {
  @Prop({ required: true, default: uuid, unique: true })
  ID: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);