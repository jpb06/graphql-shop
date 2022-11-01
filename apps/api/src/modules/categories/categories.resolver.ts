import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Category } from '@prisma/client';

import { GqlProduct } from '../products/dtos/gql.product.dto';
import { ProductsService } from '../products/products.service';
import { CategoriesService } from './categories.service';
import { GqlCategory } from './dtos/gql.category.dto';

@Resolver(GqlCategory)
export class CategoriesResolver {
  constructor(
    private categories: CategoriesService,
    private products: ProductsService
  ) {}

  @Query(() => [GqlCategory], { name: 'categories' })
  async getAll(): Promise<Array<Category>> {
    return this.categories.getAll();
  }

  @Query(() => GqlCategory, { name: 'category' })
  async getBy(@Args('id', { type: () => Int }) id: number): Promise<Category> {
    return this.categories.getBy(id);
  }

  @ResolveField('products', () => [GqlProduct])
  async getProducts(@Parent() category: GqlCategory): Promise<Array<Category>> {
    const { id } = category;

    return this.products.getByCategory(id);
  }
}
