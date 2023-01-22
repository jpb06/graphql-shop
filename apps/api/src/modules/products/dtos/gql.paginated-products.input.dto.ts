import 'reflect-metadata';
import { Field, Int, InputType } from '@nestjs/graphql';

import { SortDirection } from './gql-sort-direction.enum';
import { NumberCondition } from './gql.number-condition.enum';
import { SortField } from './gql.sort-field.enum';
import { GqlPaginationArgs } from '../../dtos/pagination-args.dto';

@InputType()
export class GqlPaginatedProductsInput extends GqlPaginationArgs {
  @Field(() => [Int], { nullable: true })
  categoriesIds?: Array<number>;

  @Field(() => String, { nullable: true })
  text?: string;

  @Field(() => Int, { nullable: true })
  price?: number;

  @Field(() => NumberCondition, { nullable: true })
  priceCondition?: NumberCondition;

  @Field(() => Boolean, { nullable: true })
  availableStock?: boolean;

  @Field(() => SortField, { nullable: true })
  field?: SortField;

  @Field(() => SortDirection, { nullable: true })
  direction?: SortDirection;
}
