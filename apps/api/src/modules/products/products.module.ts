import { Module, forwardRef } from '@nestjs/common';

import { DatabaseModule } from '@backend/database';

import { CategoriesModule } from '../categories/categories.module';
import { GetAllClosure } from './closures/get-all.closure';
import { GetByClosure } from './closures/get-by.closure';
import { GetPaginatedClosure } from './closures/get-paginated.closure';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => CategoriesModule)],
  providers: [
    ProductsService,
    ProductsResolver,
    GetByClosure,
    GetAllClosure,
    GetPaginatedClosure,
  ],
  exports: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
