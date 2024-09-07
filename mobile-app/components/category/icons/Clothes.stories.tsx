import type { Meta, StoryObj } from "@storybook/react";
import Component from "./Clothe";

const meta: Meta<typeof Component> = {
  title: "Category/Icons/Clothes",
  component: Component,
};

export default meta;

export const Clothes: StoryObj<typeof Component> = {
  args: {
    color: "black",
  },
};
