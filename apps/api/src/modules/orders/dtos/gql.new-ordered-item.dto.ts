import 'reflect-metadata';
import { Field, Int, InputType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class GqlNewOrderedItem {
  @Field(() => Int)
  @IsNumber()
  idProduct: number;

  @Field(() => Int)
  @IsNumber()
  quantity: number;
}
