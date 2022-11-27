import 'reflect-metadata';
import { Field, Int, ObjectType } from '@nestjs/graphql';

import { GqlProduct } from './gql.product.dto';

@ObjectType()
export class GqlPaginatedProductsOutput {
  @Field(() => Int)
  id: number;

  @Field(() => [GqlProduct])
  data: Array<GqlProduct>;

  @Field(() => Boolean)
  hasMoreData: boolean;
}
