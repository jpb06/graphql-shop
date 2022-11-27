import 'reflect-metadata';
import { Field, Int, InputType, registerEnumType } from '@nestjs/graphql';

export enum NumberCondition {
  gte = 'gte',
  lte = 'lte',
}

registerEnumType(NumberCondition, {
  name: 'NumberCondition',
});

@InputType()
export class GqlPaginatedProductsFiltersInput {
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
}
