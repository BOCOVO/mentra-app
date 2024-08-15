import { GraphQLError } from 'graphql';

export class TransactionNotFound extends GraphQLError {
  constructor() {
    super('Transaction not found', {
      extensions: { code: 'TRANSACTION_NOT_FOUND' },
    });
  }
}
