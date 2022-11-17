import 'reflect-metadata';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class GqlPlaceOrderOutput {
  @Field(() => Int)
  orderId: number;
}
