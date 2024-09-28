import type { Meta, StoryObj } from "@storybook/react";
import ExpenseForm from "./ExpenseForm";

const meta: Meta<typeof ExpenseForm> = {
  title: "Expense/ExpenseForm",
  component: ExpenseForm,
};

export default meta;

export const ExpenseFormSample: StoryObj<
  typeof ExpenseForm
> = {};
