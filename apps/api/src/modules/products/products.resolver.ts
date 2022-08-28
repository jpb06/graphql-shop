import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { CategoriesService } from '../categories/categories.service';
import { Category } from '../categories/dtos/category.dto';
import { Product } from '../products/dtos/product.dto';
import { ProductsService } from '../products/products.service';

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
