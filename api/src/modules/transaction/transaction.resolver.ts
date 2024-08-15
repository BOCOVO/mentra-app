import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { GqlUseAuth, GqlUser } from '../auth/guards/graphql-guards';

import { TransactionService } from './transaction.service';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dtos';
import { UpdateTransactionDto } from './dto/update-transaction.dtos';

import { JwtTokenPayload } from '@/types/user';
import { OperationResult } from '@/types/gql/objects';

@Resolver()
export class TransactionResolver {
  constructor(private readonly transactionService: TransactionService) {}

  @Mutation(() => Transaction)
  @GqlUseAuth()
  async createTransaction(
    @GqlUser() user: JwtTokenPayload,
    @Args('input') args: CreateTransactionDto,
  ) {
    return this.transactionService.createTransaction(user.id, args);
  }

  @Mutation(() => [Transaction])
  @GqlUseAuth()
  async createBulkTransaction(
    @GqlUser() user: JwtTokenPayload,
    @Args({ name: 'input', type: () => [CreateTransactionDto] })
    args: CreateTransactionDto[],
  ) {
    return this.transactionService.createBulkTransaction(user.id, args);
  }

  @Mutation(() => Transaction)
  @GqlUseAuth()
  async updateTransaction(
    @GqlUser() user: JwtTokenPayload,
    @Args('transactionID') transactionID: string,
    @Args({ name: 'input', type: () => UpdateTransactionDto })
    args: UpdateTransactionDto,
  ) {
    return this.transactionService.updateTransaction(
      user.id,
      transactionID,
      args,
    );
  }

  @Mutation(() => OperationResult)
  @GqlUseAuth()
  async deleteTransaction(
    @GqlUser() user: JwtTokenPayload,
    @Args('transactionID') transactionID: string,
  ) {
    return this.transactionService.deleteTransaction(user.id, transactionID);
  }
}
