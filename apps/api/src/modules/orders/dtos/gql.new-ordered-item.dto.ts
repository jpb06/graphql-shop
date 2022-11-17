import 'reflect-metadata';
import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class GqlNewOrderedItem {
  @Field(() => Int)
  idProduct: number;

  @Field(() => Int)
  quantity: number;
}
