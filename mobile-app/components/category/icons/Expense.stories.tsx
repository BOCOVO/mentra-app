import type { Meta, StoryObj } from "@storybook/react";
import Component from "./Expense";

const meta: Meta<typeof Component> = {
  title: "Category/Icons/Expense",
  component: Component,
};

export default meta;

export const Expense: StoryObj<typeof Component> = {
  args: {
    color: "black",
  },
};
