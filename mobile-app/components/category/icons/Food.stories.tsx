import type { Meta, StoryObj } from "@storybook/react";
import Component from "./Food";

const meta: Meta<typeof Component> = {
  title: "Category/Icons/Food",
  component: Component,
};

export default meta;

export const Food: StoryObj<typeof Component> = {
  args: {
    color: "black",
  },
};
