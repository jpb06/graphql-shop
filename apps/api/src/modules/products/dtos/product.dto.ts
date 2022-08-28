import 'reflect-metadata';
import { ObjectType, Field, Float, ID } from '@nestjs/graphql';
import { IsUrl } from 'class-validator';

import { Category } from '../../categories/dtos/category.dto';

@ObjectType()
export class Product {
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

  @Field(() => Category, { nullable: true, name: 'category' })
  Category?: Category | null;
}
