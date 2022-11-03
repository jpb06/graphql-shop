import 'reflect-metadata';
import { InputType } from '@nestjs/graphql';

import { GqlCreditCard } from '../../credit-card/dtos/gql.credit-card.dto';

@InputType()
export class GqlPlaceOrderInput extends GqlCreditCard {}
