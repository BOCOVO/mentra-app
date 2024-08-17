import type { Meta, StoryObj } from "@storybook/react";
import { SizableText } from "tamagui";

const meta: Meta<typeof SizableText> = {
  title: "SizableText",
  component: SizableText,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    children: "Lorem importedum",
  },
};

export default meta;

export const TitleX: StoryObj<typeof SizableText> = {
  args: {
    size: "$titleX",
  },
};

export const Title1: StoryObj<typeof SizableText> = {
  args: {
    size: "$title1",
  },
};

export const Title2: StoryObj<typeof SizableText> = {
  args: {
    size: "$title2",
  },
};

export const Title3: StoryObj<typeof SizableText> = {
  args: {
    size: "$title3",
  },
};

export const Regular1: StoryObj<typeof SizableText> = {
  args: {
    size: "$regular1",
  },
};

export const Regular2: StoryObj<typeof SizableText> = {
  args: {
    size: "$regular2",
  },
};

export const Regular3: StoryObj<typeof SizableText> = {
  args: {
    size: "$regular3",
  },
};

export const Small: StoryObj<typeof SizableText> = {
  args: {
    size: "$small",
  },
};

export const Tiny: StoryObj<typeof SizableText> = {
  args: {
    size: "$tiny",
  },
};
