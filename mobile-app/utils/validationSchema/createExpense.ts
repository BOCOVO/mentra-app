import { object, string } from "yup";
import { requiredNumber, requiredString } from "./commons";

export const createExpenseFormValidation = object({
  title: requiredString.required("expense.validation.expense-title"),
  description: string(),
  amount: requiredNumber,
  category: requiredString.required("expense.validation.select-category"),
});
