import 'reflect-metadata';
import { ObjectType, Field, Int } from '@nestjs/graphql';

import { Product } from '../products/product.model';

@ObjectType()
export class Category {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => [Product], { nullable: true })
  products?: [Product] | null;
}
