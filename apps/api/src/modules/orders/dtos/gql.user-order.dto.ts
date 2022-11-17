import 'reflect-metadata';
import { ObjectType, Field, PickType } from '@nestjs/graphql';

import { GqlCreditCard } from '../../credit-cards/dtos/gql.credit-card.dto';
import { GqlOrderedItem } from '../../ordered-items/dtos/gql.ordered-item.dto';

@ObjectType()
class GqlPartialCreditCard extends PickType(
  GqlCreditCard,
  ['number', 'expires'] as const,
  ObjectType
) {}

@ObjectType()
class GqlPartialOrderedItem extends PickType(
  GqlOrderedItem,
  ['id', 'name', 'quantity', 'price'] as const,
  ObjectType
) {}

@ObjectType()
export class GqlUserOrder {
  @Field(() => Date)
  createdAt: Date;

  @Field(() => GqlPartialCreditCard)
  creditCard: GqlPartialCreditCard;

  @Field(() => [GqlPartialOrderedItem])
  items: GqlPartialOrderedItem[];
}
