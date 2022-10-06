import { Field, ObjectType } from '@nestjs/graphql';

import { GqlBaseUser } from '../../users/dtos/gql-base-user.dto';

@ObjectType()
export class GqlAuthOutput extends GqlBaseUser {
  @Field(() => String)
  token: string;
}
