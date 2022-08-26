import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Product } from '../products/product.model';
import { ProductsService } from '../products/product.service';
import { Category } from './category.model';
import { CategoriesService } from './category.service';

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
