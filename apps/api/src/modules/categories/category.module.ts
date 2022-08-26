import { Module, forwardRef } from '@nestjs/common';

import { DatabaseModule } from '@backend/database';

import { ProductsModule } from '../products/product.module';
import { CategoriesResolver } from './category.resolver';
import { CategoriesService } from './category.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => ProductsModule)],
  providers: [CategoriesResolver, CategoriesService],
  exports: [CategoriesResolver, CategoriesService],
})
export class CategoriesModule {}
