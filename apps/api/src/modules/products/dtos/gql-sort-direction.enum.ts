import { registerEnumType } from '@nestjs/graphql';

export enum SortDirection {
  asc = 'asc',
  desc = 'desc',
}

registerEnumType(SortDirection, {
  name: 'SortDirection',
});
