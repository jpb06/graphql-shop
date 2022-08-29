import 'reflect-metadata';
import { ObjectType, Field, GraphQLISODateTime, ID } from '@nestjs/graphql';

@ObjectType()
export class GqlBaseUser {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  email: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  firstName: string;

  @Field(() => GraphQLISODateTime)
  joinDate: Date;

  @Field(() => String)
  role: string;
}
