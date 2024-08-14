import { Module } from '@nestjs/common';

import { ExpenseExtractorService } from './expense-extractor.service';
import { ExpenseExtractorResolver } from './expense-extractor.resolver';

@Module({
  providers: [ExpenseExtractorService, ExpenseExtractorResolver],
})
export class ExpenseExtractorModule {}
