import { InputType, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class GqlSignupInput {
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
