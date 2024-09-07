import type { Meta, StoryObj } from "@storybook/react";
import Component from "./Subscription";

const meta: Meta<typeof Component> = {
  title: "Category/Icons/Subscription",
  component: Component,
};

export default meta;

export const Subscription: StoryObj<typeof Component> = {
  args: {
    color: "black",
  },
};
