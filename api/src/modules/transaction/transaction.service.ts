import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';

import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dtos';
import { UpdateTransactionDto } from './dto/update-transaction.dtos';
import { TransactionNotFound } from './errors/TransactionNotFound.error';

import { OperationResult } from '@/types/gql/objects';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepo: EntityRepository<Transaction>,
  ) {}

  async createTransaction(
    ownerID: string,
    {
      amount,
      categoryID,
      description,
      title,
      type,
      date,
    }: CreateTransactionDto,
  ): Promise<Transaction> {
    const createdTransaction = await this.transactionRepo.create({
      title,
      description,
      amount,
      type,
      date,
      category: categoryID,
      owner: ownerID,
    });

    await this.transactionRepo.insert(createdTransaction);

    return createdTransaction;
  }

  async createBulkTransaction(ownerID: string, list: CreateTransactionDto[]) {
    const creationData = list.map(
      ({ amount, categoryID, description, title, type, date }) =>
        this.transactionRepo.create({
          title,
          description,
          amount,
          type,
          date,
          category: categoryID,
          owner: ownerID,
        }),
    );

    await this.transactionRepo.insertMany(creationData);

    return creationData;
  }

  async deleteTransaction(
    userID: string,
    transactionID: string,
  ): Promise<OperationResult> {
    const deletionCount = await this.transactionRepo.nativeDelete({
      id: transactionID,
      owner: userID,
    });

    return {
      success: deletionCount > 0,
    };
  }

  async updateTransaction(
    userID: string,
    transactionID: string,
    { categoryID, ...restUpdateValues }: UpdateTransactionDto,
  ): Promise<Transaction> {
    await this.transactionRepo.nativeUpdate(
      {
        id: transactionID,
        owner: userID,
      },
      {
        ...restUpdateValues,
        ...(categoryID ? { category: categoryID } : {}),
      },
    );

    try {
      const entry = await this.transactionRepo.findOneOrFail({
        id: transactionID,
        owner: userID,
      });

      return entry;
    } catch (error) {
      throw new TransactionNotFound();
    }
  }
}
