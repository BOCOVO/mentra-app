import { Injectable, Logger } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ConfigService } from '@nestjs/config';
import { validateOrReject } from 'class-validator';

import { ExpenseResponse } from './dto/expense-response.dto';
import { InvalidAIResponse } from './essors/InvalideAIResponse';
import { ExtractExpenseInput } from './dto/extract-expense-input';

import AppEnvConfigs from '@/types/config';
import { extractExpensesPrompt } from '@/config/promts';

@Injectable()
export class ExpenseExtractorService {
  private readonly logger = new Logger(ExpenseExtractorService.name);

  private genAI: GoogleGenerativeAI;

  constructor(configService: ConfigService) {
    const googleAIAPIKey =
      configService.get<AppEnvConfigs['googleAI']>('googleAI');

    const genAI = new GoogleGenerativeAI(googleAIAPIKey.apiKey);

    this.genAI = genAI;
  }

  async extractExpenses(
    fileInfo: ExtractExpenseInput,
  ): Promise<ExpenseResponse[]> {
    const model = this.genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: { responseMimeType: 'application/json' },
    });

    const result = await model.generateContent([
      {
        fileData: {
          mimeType: fileInfo.mimeType,
          fileUri: fileInfo.uri,
        },
      },
      { text: extractExpensesPrompt },
    ]);

    const textResult = result.response.text();

    try {
      let expenses: ExpenseResponse[] = JSON.parse(textResult);
      if (!Array.isArray(expenses)) {
        expenses = [expenses];
      }

      const validatedExpenses: ExpenseResponse[] = [];

      for (const expense of expenses) {
        const expenseObj = new ExpenseResponse();
        Object.assign(expenseObj, expense);

        try {
          await validateOrReject(expenseObj);
          validatedExpenses.push(expenseObj);
        } catch (error) {
          this.logger.error(
            {
              message: 'Validation error',
              data: { error },
            },
            error,
          );
        }
      }

      return validatedExpenses;
    } catch (error) {
      this.logger.error(
        {
          message: 'Invalid ai response',
          data: { response: textResult },
        },
        error,
      );
      throw new InvalidAIResponse();
    }
  }
}
