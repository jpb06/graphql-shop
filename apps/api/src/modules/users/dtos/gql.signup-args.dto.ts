import { Field, ArgsType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@ArgsType()
export class GqlSignupArgs {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  lastName: string;

  @Field()
  firstName: string;

  @Field()
  password: string;
}
