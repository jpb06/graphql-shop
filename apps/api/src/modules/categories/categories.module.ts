import { Module, forwardRef } from '@nestjs/common';

import { DatabaseModule } from '@backend/database';

import { CategoriesResolver } from './categories.resolver';
import { CategoriesService } from './categories.service';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => ProductsModule)],
  providers: [CategoriesService, CategoriesResolver],
  exports: [CategoriesService, CategoriesResolver],
})
export class CategoriesModule {}
