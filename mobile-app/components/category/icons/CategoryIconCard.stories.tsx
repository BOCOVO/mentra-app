import type { Meta, StoryObj } from "@storybook/react";
import Component from "./CategoryIconCard";

const meta: Meta<typeof Component> = {
  title: "Category/Icons/CategoryIconCard",
  component: Component,
};

export default meta;

export const CategoryIconCardClothes: StoryObj<typeof Component> = {
  args: {
    iconName: "clothes",
  },
};

export const CategoryIconCardGraduation: StoryObj<typeof Component> = {
  args: {
    iconName: "graduation",
  },
};
