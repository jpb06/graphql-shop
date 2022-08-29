import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GqlAuthOutput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  token: string;
}
