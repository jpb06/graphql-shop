import 'reflect-metadata';
import { ObjectType, Field, GraphQLISODateTime, ID } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  firstName: string;

  @Field(() => GraphQLISODateTime)
  joinDate: Date;

  @Field(() => String)
  role: Date;
}
