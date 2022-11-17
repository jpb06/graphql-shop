import 'reflect-metadata';
import { ObjectType, Field, ID, Int, Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';

@ObjectType()
export class GqlOrderedItem {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  image: string;

  @Field(() => Float)
  price: Decimal;
}
