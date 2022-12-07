import 'reflect-metadata';
import { Field, Int, ObjectType } from '@nestjs/graphql';

import { GqlProductWithCategory } from './gql.product-with-category.dto';

@ObjectType()
export class GqlPaginatedProductsOutput {
  @Field(() => Int)
  id: number;

  @Field(() => [GqlProductWithCategory])
  data: Array<GqlProductWithCategory>;

  @Field(() => Boolean)
  hasMoreData: boolean;
}
