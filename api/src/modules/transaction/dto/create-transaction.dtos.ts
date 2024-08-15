import { Field, Float, InputType } from '@nestjs/graphql';

import { TransactionType } from '../enums/transaction-type.enum';

@InputType()
export class CreateTransactionDto {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Float)
  amount: number;

  @Field(() => TransactionType)
  type: TransactionType;

  @Field()
  categoryID: string;

  @Field(() => Date)
  date: Date;
}
