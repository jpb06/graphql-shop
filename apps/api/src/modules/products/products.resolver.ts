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
import { GqlCategory } from '../categories/dtos/gql.category.dto';
import { GqlPaginationArgs } from '../dtos/pagination-args.dto';
import { GqlProduct } from '../products/dtos/gql.product.dto';
import { ProductsService } from '../products/products.service';
import { GetAllSelectType } from './closures/get-all.closure';
import { GqlPaginatedProductsFiltersInput } from './dtos/gql.paginated-products-filters.input.dto';
import { GqlPaginatedProductsSortingInput } from './dtos/gql.paginated-products-sorting.input.dto';
import { GqlPaginatedProductsOutput } from './dtos/gql.paginated-products.output.dto';

@Resolver(GqlProduct)
export class ProductsResolver {
  constructor(
    private categories: CategoriesService,
    private products: ProductsService
  ) {}

  @Query(() => [GqlProduct], { name: 'products' })
  async getAll(): Promise<Array<GetAllSelectType>> {
    return this.products.getAll();
  }

  @Query(() => GqlPaginatedProductsOutput, { name: 'productsByPage' })
  async getPaginatedProducts(
    @Args({ name: 'pagination', type: () => GqlPaginationArgs })
    pagination: GqlPaginationArgs,
    @Args({ name: 'filters', type: () => GqlPaginatedProductsFiltersInput })
    filters: GqlPaginatedProductsFiltersInput,
    @Args({ name: 'sort', type: () => GqlPaginatedProductsSortingInput })
    sorting: GqlPaginatedProductsSortingInput
  ): Promise<GqlPaginatedProductsOutput> {
    return this.products.getPaginated(pagination, filters, sorting);
  }

  @Query(() => [GqlProduct], { name: 'productsWithIds' })
  async getProductsWithIds(
    @Args('ids', { type: () => [Int] }) ids: Array<number>
  ): Promise<Array<Product>> {
    return this.products.getByIds(ids);
  }

  @Query(() => GqlProduct, { name: 'product' })
  async getBy(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    return this.products.getBy(id);
  }

  @ResolveField('category', () => GqlCategory)
  async getCategory(@Parent() { Category }: GqlProduct): Promise<Category> {
    return this.categories.getBy(Category.id);
  }
}
