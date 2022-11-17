import { Module } from '@nestjs/common';

import { DatabaseModule } from '@backend/database';

import { AddressesResolver } from './addresses.resolver';
import { AddressesService } from './addresses.service';

@Module({
  imports: [DatabaseModule],
  providers: [AddressesService, AddressesResolver],
  exports: [AddressesService, AddressesResolver],
})
export class AddressesModule {}
