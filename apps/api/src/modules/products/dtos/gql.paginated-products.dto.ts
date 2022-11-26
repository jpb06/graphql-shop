import 'reflect-metadata';
import { ObjectType, Field, Int } from '@nestjs/graphql';

import { GqlProduct } from './gql.product.dto';

@ObjectType()
export class GqlPaginatedProducts {
  @Field(() => Int)
  id: number;

  @Field(() => [GqlProduct])
  data: Array<GqlProduct>;

  @Field(() => Boolean)
  hasMoreData: boolean;
}
