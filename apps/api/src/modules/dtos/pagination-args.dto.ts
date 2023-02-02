import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GqlPaginationArgs {
  @Field(() => Int, { nullable: true })
  offset = 0;

  @Field(() => Int, { nullable: true })
  limit = 25;
}
