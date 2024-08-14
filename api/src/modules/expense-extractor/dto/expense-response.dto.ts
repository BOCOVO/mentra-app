import { Field, Float, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
@ObjectType()
export class ExpenseResponse {
  @IsString()
  @Field()
  expenseTitle: string;

  @IsString()
  @Field()
  description: string;

  @IsString()
  @Field(() => Float)
  amount: string;

  @IsString()
  @Field()
  category: string;
}
