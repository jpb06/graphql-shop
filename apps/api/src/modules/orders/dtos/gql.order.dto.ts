import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';

import { GqlOrderedItem } from '../../ordered-items/dtos/gql.ordered-item.dto';

@ObjectType()
export class GqlOrder {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  idUser: number;

  @Field(() => ID)
  idCreditCard: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => String)
  creditCardNumber: string;

  @Field(() => [GqlOrderedItem], { nullable: true, name: 'items' })
  OrderItems?: GqlOrderedItem[] | null;
}
