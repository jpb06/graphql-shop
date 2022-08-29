import { Module, forwardRef } from '@nestjs/common';

import { DatabaseModule } from '@backend/database';

import { AuthModule } from '../auth/auth.module';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  providers: [UsersService, UsersResolver],
  exports: [UsersService, UsersResolver],
})
export class UsersModule {}
