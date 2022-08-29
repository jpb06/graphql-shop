import { Module, forwardRef } from '@nestjs/common';

import { DatabaseModule } from '@backend/database';

import { CategoriesModule } from '../categories/categories.module';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => CategoriesModule)],
  providers: [ProductsService, ProductsResolver],
  exports: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
