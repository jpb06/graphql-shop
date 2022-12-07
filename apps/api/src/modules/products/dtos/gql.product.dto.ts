import 'reflect-metadata';
import { ObjectType, Field, Float, ID, Int } from '@nestjs/graphql';
import { IsUrl } from 'class-validator';

@ObjectType()
export class GqlProduct {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  idCategory: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  @IsUrl()
  image: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  stock: number;
}
