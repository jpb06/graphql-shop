import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Product } from '../products/dtos/product.dto';
import { ProductsService } from '../products/products.service';
import { CategoriesService } from './categories.service';
import { Category } from './dtos/category.dto';

@Resolver(Category)
export class CategoriesResolver {
  constructor(
    private categories: CategoriesService,
    private products: ProductsService
  ) {}

  @Query(() => [Category], { name: 'categories' })
  async getAll() {
    return this.categories.getAll();
  }

  @Query(() => Category, { name: 'category' })
  async getBy(@Args('id', { type: () => Int }) id: number) {
    return this.categories.getBy(id);
  }

  @ResolveField('products', () => [Product])
  async getProducts(@Parent() category: Category) {
    const { id } = category;

    return this.products.getByCategory(id);
  }
}
