import { Module, forwardRef } from '@nestjs/common';

import { DatabaseModule } from '@backend/database';

import { CategoriesModule } from '../categories/categories.module';
import { GetAll } from './closures/get-all.closure';
import { GetBy } from './closures/get-by.closure';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => CategoriesModule)],
  providers: [ProductsService, ProductsResolver, GetBy, GetAll],
  exports: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
