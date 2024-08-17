import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "TextArea",
  component: TextArea,
  args: {
    help: "Input your full name",
  },
};

export default meta;

export const TextAreaSample: StoryObj<typeof TextArea> = {};
