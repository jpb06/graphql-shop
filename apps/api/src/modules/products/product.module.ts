import { Module, forwardRef } from '@nestjs/common';

import { DatabaseModule } from '@backend/database';

import { CategoriesModule } from '../categories/category.module';
import { ProductsResolver } from './product.resolver';
import { ProductsService } from './product.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => CategoriesModule)],
  providers: [ProductsResolver, ProductsService],
  exports: [ProductsResolver, ProductsService],
})
export class ProductsModule {}
