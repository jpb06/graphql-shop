import 'reflect-metadata';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GqlCreditCard {
  @Field(() => String)
  number: string;

  @Field(() => String)
  expires: string;

  @Field(() => String)
  cvc: string;
}
