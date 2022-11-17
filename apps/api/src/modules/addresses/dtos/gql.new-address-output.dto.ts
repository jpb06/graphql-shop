import { ObjectType } from '@nestjs/graphql';

import { GqlAddress } from './gql.address.dto';

@ObjectType()
export class GqlNewAddressOutput extends GqlAddress {}
