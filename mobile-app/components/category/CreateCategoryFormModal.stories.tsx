import type { Meta, StoryObj } from "@storybook/react";
import CreateCategoryFormModal from "./CreateCategoryFormModal";

const meta: Meta<typeof CreateCategoryFormModal> = {
  title: "Category/CreateCategoryFormModal",
  component: CreateCategoryFormModal,
};

export default meta;

export const CreateCategoryFormModalSample: StoryObj<typeof CreateCategoryFormModal> =
  {
    args: {
      selectedKey: "clothes"
    }
  };