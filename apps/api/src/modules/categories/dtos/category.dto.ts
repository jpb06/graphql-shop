import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';

import { Product } from '../../products/dtos/product.dto';

@ObjectType()
export class Category {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => [Product], { nullable: true })
  products?: [Product] | null;
}
