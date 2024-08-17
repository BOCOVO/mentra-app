import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    children: "Sign up",
  },
};

export default meta;

export const PrimaryButton: StoryObj<typeof Button> = {
  args: {
    theme: "primary_btn",
  },
};

export const SecondaryButton: StoryObj<typeof Button> = {
  args: {
    theme: "secondary_btn",
  },
};
