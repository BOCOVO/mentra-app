import type { Meta, StoryObj } from "@storybook/react";
import CategoryIconPicker from "./CategoryIconPicker";

const meta: Meta<typeof CategoryIconPicker> = {
  title: "Category/CategoryIconPicker",
  component: CategoryIconPicker,
};

export default meta;

export const CategoryIconPickerSample: StoryObj<typeof CategoryIconPicker> =
  {
    args: {
      selectedKey: "clothes"
    }
  };