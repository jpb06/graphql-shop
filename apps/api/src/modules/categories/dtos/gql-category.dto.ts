import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GqlCategory {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;
}
