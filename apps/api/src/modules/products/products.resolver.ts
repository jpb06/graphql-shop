import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Product, Category } from '@prisma/client';

import { CategoriesService } from '../categories/categories.service';
import { GqlCategory } from '../categories/dtos/gql-category.dto';
import { GqlProductWithCategory } from '../products/dtos/gql.product-with-category.dto';
import { ProductsService } from '../products/products.service';
import { GetAllSelectType } from './closures/get-all.closure';
import { GqlPaginatedProductsInput } from './dtos/gql.paginated-products.input.dto';
import { GqlPaginatedProductsOutput } from './dtos/gql.paginated-products.output.dto';

@Resolver(GqlProductWithCategory)
export class ProductsResolver {
  constructor(
    private categories: CategoriesService,
    private products: ProductsService
  ) {}

  @Query(() => [GqlProductWithCategory], { name: 'products' })
  async getAll(): Promise<Array<GetAllSelectType>> {
    return this.products.getAll();
  }

  @Query(() => GqlPaginatedProductsOutput, { name: 'productsByPage' })
  async getPaginatedProducts(
    @Args({ name: 'input', type: () => GqlPaginatedProductsInput })
    input: GqlPaginatedProductsInput
  ): Promise<GqlPaginatedProductsOutput> {
    return this.products.getPaginated(input);
  }

  @Query(() => [GqlProductWithCategory], { name: 'productsWithIds' })
  async getProductsWithIds(
    @Args('ids', { type: () => [Int] }) ids: Array<number>
  ): Promise<Array<Product>> {
    return this.products.getByIds(ids);
  }

  @Query(() => GqlProductWithCategory, { name: 'product' })
  async getBy(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    return this.products.getBy(id);
  }

  @ResolveField('category', () => GqlCategory)
  async getCategory(
    @Parent() { Category }: GqlProductWithCategory
  ): Promise<Category> {
    return this.categories.getBy(Category.id);
  }
}
