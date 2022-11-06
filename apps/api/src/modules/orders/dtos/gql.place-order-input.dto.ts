import 'reflect-metadata';
import { InputType } from '@nestjs/graphql';

import { GqlCreditCard } from '../../credit-cards/dtos/gql.credit-card.dto';

@InputType()
export class GqlPlaceOrderInput extends GqlCreditCard {}
