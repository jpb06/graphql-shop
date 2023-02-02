import 'reflect-metadata';
import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GqlCreditCard {
  @Field(() => String)
  @IsString()
  number: string;

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String)
  @IsString()
  expires: string;

  @Field(() => String)
  @IsString()
  cvc: string;
}
