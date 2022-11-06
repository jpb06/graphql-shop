import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class GqlAddress {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  street: string;

  @Field(() => String)
  zipCode: string;

  @Field(() => String)
  city: string;

  @Field(() => String)
  country: string;
}
