import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Category } from '../categories/category.model';
import { CategoriesService } from '../categories/category.service';
import { Product } from '../products/product.model';
import { ProductsService } from '../products/product.service';

@Resolver(Product)
export class ProductsResolver {
  constructor(
    private categories: CategoriesService,
    private products: ProductsService
  ) {}

  @Query(() => [Product], { name: 'products' })
  async getAll() {
    return this.products.getAll();
  }

  @Query(() => Product, { name: 'product' })
  async getBy(@Args('id', { type: () => Int }) id: number) {
    return this.products.getBy(id);
  }

  @ResolveField('category', () => Category)
  async getCategory(@Parent() product: Product) {
    const { Category } = product;

    return this.categories.getBy(Category.id);
  }
}
