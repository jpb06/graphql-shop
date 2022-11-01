import { Field, ArgsType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@ArgsType()
export class GqlLoginArgs {
  @Field()
  @IsEmail()
  username: string;

  @Field()
  password: string;
}
