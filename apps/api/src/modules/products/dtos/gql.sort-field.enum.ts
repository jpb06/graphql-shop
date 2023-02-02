import { registerEnumType } from '@nestjs/graphql';

export enum SortField {
  price = 'price',
  name = 'name',
}

registerEnumType(SortField, {
  name: 'SortField',
});
