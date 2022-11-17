import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';

import { GqlProduct } from '../../products/dtos/gql.product.dto';

@ObjectType()
export class GqlCategory {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => [GqlProduct], { nullable: true })
  products?: [GqlProduct] | null;
}
