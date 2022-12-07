import 'reflect-metadata';
import { ObjectType, Field } from '@nestjs/graphql';

import { GqlCategory } from '../../categories/dtos/gql-category.dto';
import { GqlProduct } from './gql.product.dto';

@ObjectType()
export class GqlProductWithCategory extends GqlProduct {
  @Field(() => GqlCategory, { nullable: true, name: 'category' })
  Category?: GqlCategory | null;
}
