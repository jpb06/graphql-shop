import { join } from 'path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { DatabaseModule } from '@backend/database';

import { CategoriesModule } from './categories/categories.module';
import { CategoriesResolver } from './categories/categories.resolver';
import { ProductsModule } from './products/products.module';
import { ProductsResolver } from './products/products.resolver';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DatabaseModule,
    CategoriesModule,
    ProductsModule,
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/api/src/schema.gql'),
      // debug: true,
      playground: true,
    }),
  ],
  providers: [ProductsResolver, CategoriesResolver, UsersModule],
})
export class AppModule {}
