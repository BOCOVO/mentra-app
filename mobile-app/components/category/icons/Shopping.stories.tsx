import type { Meta, StoryObj } from "@storybook/react";
import Component from "./Shopping";

const meta: Meta<typeof Component> = {
  title: "Category/Icons/Shopping",
  component: Component,
};

export default meta;

export const Shopping: StoryObj<typeof Component> = {
  args: {
    color: "black",
  },
};
