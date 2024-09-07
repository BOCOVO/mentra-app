import type { Meta, StoryObj } from "@storybook/react";
import Component from "./Medical";

const meta: Meta<typeof Component> = {
  title: "Category/Icons/Medical",
  component: Component,
};

export default meta;

export const Medical: StoryObj<typeof Component> = {
  args: {
    color: "black",
  },
};
