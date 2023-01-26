import 'reflect-metadata';
import { Field, Int, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

import { SortDirection } from './gql-sort-direction.enum';
import { NumberCondition } from './gql.number-condition.enum';
import { SortField } from './gql.sort-field.enum';
import { GqlPaginationArgs } from '../../dtos/pagination-args.dto';

@InputType()
export class GqlPaginatedProductsInput extends GqlPaginationArgs {
  @Field(() => [Int], { nullable: true })
  @IsOptional()
  @IsNumber({}, { each: true })
  categoriesIds?: Array<number>;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  text?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  price?: number;

  @Field(() => NumberCondition, { nullable: true })
  priceCondition?: NumberCondition;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  availableStock?: boolean;

  @Field(() => SortField, { nullable: true })
  field?: SortField;

  @Field(() => SortDirection, { nullable: true })
  direction?: SortDirection;
}
