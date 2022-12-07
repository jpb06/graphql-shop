import 'reflect-metadata';
import { ObjectType, Field } from '@nestjs/graphql';

import { GqlProduct } from '../../products/dtos/gql.product.dto';
import { GqlCategory } from './gql-category.dto';

@ObjectType()
export class GqlCategoryWithProducts extends GqlCategory {
  @Field(() => [GqlProduct], { nullable: true })
  products?: [GqlProduct] | null;
}
