import database from "db";
import { Transaction } from "db/models/transaction";
import { TransactionType } from "gql/graphql";

type CreateTransactionInput = Pick<
  Transaction,
  "title" | "description" | "amount"
> & {
  category?: string;
};

export const createTransaction = async (data: CreateTransactionInput) => {
  await database.write(async () => {
    const newPost = await database
      .get<Transaction>(Transaction.table)
      .create((record) => {
        record.title = data.title;
        record.description = data.description;
        record.amount = data.amount;
        record.type = TransactionType.Expense;
        record.date = new Date(),
        // @ts-ignore
        record.category.id = data.category;
      });

    return newPost;
  });
};
