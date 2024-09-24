import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
  args: {},
};

export default meta;

const items = [
  { name: "Apple" },

  { name: "Pear" },

  { name: "Blackberry" },

  { name: "Peach" },

  { name: "Apricot" },

  { name: "Melon" },

  { name: "Honeydew" },

  { name: "Starfruit" },

  { name: "Blueberry" },

  { name: "Raspberry" },

  { name: "Strawberry" },

  { name: "Mango" },

  { name: "Pineapple" },

  { name: "Lime" },

  { name: "Lemon" },

  { name: "Coconut" },

  { name: "Guava" },

  { name: "Papaya" },

  { name: "Orange" },

  { name: "Grape" },

  { name: "Jackfruit" },

  { name: "Durian" },
];

export const SelectSample: StoryObj<typeof Select<(typeof items)[number]>> = {
  args: {
    items,
    getKey: (item) => item.name,
    getLabel: (item) => item.name
  },
};
