import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GqlPaginationArgs {
  @Field(() => Int)
  offset = 0;

  @Field(() => Int)
  limit = 25;
}
