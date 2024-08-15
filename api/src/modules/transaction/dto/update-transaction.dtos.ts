import { Field, Float, InputType } from '@nestjs/graphql';

import { TransactionType } from '../enums/transaction-type.enum';

@InputType()
export class UpdateTransactionDto {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Float, { nullable: true })
  amount?: number;

  @Field(() => TransactionType, { nullable: true })
  type?: TransactionType;

  @Field({ nullable: true })
  categoryID?: string;

  @Field(() => Date)
  date: Date;
}
