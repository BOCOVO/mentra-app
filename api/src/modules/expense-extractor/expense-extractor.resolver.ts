import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { GqlUseAuth } from '../auth/guards/graphql-guards';

import { ExpenseResponse } from './dto/expense-response.dto';
import { ExtractExpenseInput } from './dto/extract-expense-input';
import { ExpenseExtractorService } from './expense-extractor.service';

@Resolver()
export class ExpenseExtractorResolver {
  constructor(
    private readonly expenseExtractorService: ExpenseExtractorService,
  ) {}

  @Mutation(() => [ExpenseResponse])
  @GqlUseAuth()
  async extractExpenses(@Args() args: ExtractExpenseInput) {
    return this.expenseExtractorService.extractExpenses(args);
  }
}
