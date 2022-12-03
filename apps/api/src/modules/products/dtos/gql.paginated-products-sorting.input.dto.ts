import 'reflect-metadata';
import { Field, InputType, registerEnumType } from '@nestjs/graphql';

export enum SortField {
  price = 'price',
  name = 'name',
}

registerEnumType(SortField, {
  name: 'SortField',
});

export enum SortDirection {
  asc = 'asc',
  desc = 'desc',
}

registerEnumType(SortDirection, {
  name: 'SortDirection',
});

@InputType()
export class GqlPaginatedProductsSortingInput {
  @Field(() => SortField, { nullable: true })
  field?: SortField;

  @Field(() => SortDirection, { nullable: true })
  direction?: SortDirection;
}
