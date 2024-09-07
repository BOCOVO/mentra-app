import type { Meta, StoryObj } from "@storybook/react";
import Component from "./CategoryIcon";

const meta: Meta<typeof Component> = {
  title: "Category/Icons/CategoryIcon",
  component: Component,
};

export default meta;

export const CategoryIcon: StoryObj<typeof Component> = {
  args: {
    color: "black",
    iconName: "clothes",
  },
};
