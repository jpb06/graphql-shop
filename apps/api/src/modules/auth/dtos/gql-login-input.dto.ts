import { InputType, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class GqlLoginInput {
  @Field()
  @IsEmail()
  username: string;

  @Field()
  password: string;
}
