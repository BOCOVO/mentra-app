import { registerEnumType } from '@nestjs/graphql';

export enum TransactionType {
  Expense = 'Expense',
  Income = 'Income',
}

registerEnumType(TransactionType, {
  name: 'TransactionType',
});
