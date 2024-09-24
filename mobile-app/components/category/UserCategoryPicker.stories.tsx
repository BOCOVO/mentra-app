import type { Meta, StoryObj } from "@storybook/react";
import UserCategoryPicker from "./UserCategoryPickerField";

const meta: Meta<typeof UserCategoryPicker> = {
  title: "Category/UserCategoryPicker",
  component: UserCategoryPicker,
};

export default meta;

export const UserCategoryPickerSample: StoryObj<typeof UserCategoryPicker> = {
  args: {
    name: "category",
  },
};
