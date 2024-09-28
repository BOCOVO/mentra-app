import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Screen/Header",
  component: Header,
};

export default meta;

export const HeaderSample: StoryObj<typeof Header> = {
  args: {
    title: "Expense",
  },
};
