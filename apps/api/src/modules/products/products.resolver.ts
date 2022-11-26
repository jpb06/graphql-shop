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
import { GqlPaginatedProducts } from './dtos/gql.paginated-products.dto';

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

  @Query(() => GqlPaginatedProducts, { name: 'productsByPage' })
  async getPaginatedProducts(
    @Args({ name: 'pagination', type: () => GqlPaginationArgs })
    pagination: GqlPaginationArgs
  ): Promise<GqlPaginatedProducts> {
    return this.products.getPaginated(pagination);
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
