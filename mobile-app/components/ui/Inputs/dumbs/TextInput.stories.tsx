import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "TextInput",
  component: TextInput,
  args: {
    help: "Input your full name",
  },
};

export default meta;

export const TextInputSample: StoryObj<typeof TextInput> = {};
