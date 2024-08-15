import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { TransactionResolver } from './transaction.resolver';
import { Transaction } from './entities/transaction.entity';
import { TransactionService } from './transaction.service';

@Module({
  imports: [MikroOrmModule.forFeature([Transaction])],
  providers: [TransactionResolver, TransactionService],
})
export class TransactionModule {}
