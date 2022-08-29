import 'reflect-metadata';
import { ObjectType, Field, Float, ID } from '@nestjs/graphql';
import { IsUrl } from 'class-validator';

import { GqlCategory } from '../../categories/dtos/gql-category.dto';

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

  @Field(() => GqlCategory, { nullable: true, name: 'category' })
  Category?: GqlCategory | null;
}
