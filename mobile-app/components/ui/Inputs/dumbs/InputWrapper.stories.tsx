import type { Meta, StoryObj } from "@storybook/react";
import InputWrapper from "./InputWrapper";

const meta: Meta<typeof InputWrapper> = {
  title: "InputWrapper",
  component: InputWrapper,
  args: {},
};

export default meta;

export const WithError: StoryObj<typeof InputWrapper> = {
  args: {
    error: "This field is required",
  },
};

export const WithHelp: StoryObj<typeof InputWrapper> = {
  args: {
    help: "Input your full name",
  },
};
