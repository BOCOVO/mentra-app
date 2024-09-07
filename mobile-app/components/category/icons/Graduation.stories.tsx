import type { Meta, StoryObj } from "@storybook/react";
import Component from "./Graduation";

const meta: Meta<typeof Component> = {
  title: "Category/Icons/Graduation",
  component: Component,
};

export default meta;

export const Graduation: StoryObj<typeof Component> = {
  args: {
    color: "black",
  },
};
