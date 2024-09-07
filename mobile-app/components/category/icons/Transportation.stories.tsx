import type { Meta, StoryObj } from "@storybook/react";
import Component from "./Transportation";

const meta: Meta<typeof Component> = {
  title: "Category/Icons/Transportation",
  component: Component,
};

export default meta;

export const Transportation: StoryObj<typeof Component> = {
  args: {
    color: "black",
  },
};
