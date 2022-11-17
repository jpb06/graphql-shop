import { ArgsType, OmitType } from '@nestjs/graphql';

import { GqlAddress } from './gql.address.dto';

@ArgsType()
export class GqlNewAddressArgs extends OmitType(
  GqlAddress,
  ['id'] as const,
  ArgsType
) {}
