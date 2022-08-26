import 'reflect-metadata';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { IsUrl } from 'class-validator';

import { Category } from '../categories/category.model';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
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

  @Field(() => Category, { nullable: true, name: 'category' })
  Category?: Category | null;
}
