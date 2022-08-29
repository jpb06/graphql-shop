import { join } from 'path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { DatabaseModule } from '@backend/database';

import { AuthModule } from './auth/auth.module';
import { AuthResolver } from './auth/auth.resolver';
import { CategoriesModule } from './categories/categories.module';
import { CategoriesResolver } from './categories/categories.resolver';
import { ProductsModule } from './products/products.module';
import { ProductsResolver } from './products/products.resolver';
import { UsersModule } from './users/users.module';
import { UsersResolver } from './users/users.resolver';

@Module({
  imports: [
    DatabaseModule,
    CategoriesModule,
    ProductsModule,
    UsersModule,
    AuthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/api/src/schema.gql'),
      // debug: true,
      playground: true,
    }),
  ],
  providers: [
    ProductsResolver,
    CategoriesResolver,
    UsersResolver,
    AuthResolver,
  ],
})
export class AppModule {}
