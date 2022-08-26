import { join } from 'path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { DatabaseModule } from '@backend/database';

import { CategoriesModule } from './categories/category.module';
import { CategoriesResolver } from './categories/category.resolver';
import { ProductsModule } from './products/product.module';
import { ProductsResolver } from './products/product.resolver';

@Module({
  imports: [
    DatabaseModule,
    CategoriesModule,
    ProductsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/api/src/schema.gql'),
      //  debug: true,
      playground: true,
    }),
  ],
  providers: [ProductsResolver, CategoriesResolver],
})
export class AppModule {}
