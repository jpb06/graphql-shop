import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Category } from '@prisma/client';

import { CategoriesService } from './categories.service';
import { GqlCategoryWithProducts } from './dtos/gql.category-with-products.dto';
import { GqlProduct } from '../products/dtos/gql.product.dto';
import { ProductsService } from '../products/products.service';

@Resolver(GqlCategoryWithProducts)
export class CategoriesResolver {
  constructor(
    private categories: CategoriesService,
    private products: ProductsService
  ) {}

  @Query(() => [GqlCategoryWithProducts], { name: 'categories' })
  async getAll(): Promise<Array<Category>> {
    return this.categories.getAll();
  }

  @Query(() => GqlCategoryWithProducts, { name: 'category' })
  async getBy(@Args('id', { type: () => Int }) id: number): Promise<Category> {
    return this.categories.getBy(id);
  }

  @ResolveField('products', () => [GqlProduct])
  async getProducts(
    @Parent() category: GqlCategoryWithProducts
  ): Promise<Array<Category>> {
    const { id } = category;

    return this.products.getByCategory(id);
  }
}
