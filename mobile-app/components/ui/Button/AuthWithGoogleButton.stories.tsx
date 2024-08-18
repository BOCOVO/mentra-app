import type { Meta, StoryObj } from "@storybook/react";
import AuthWithGoogleButton from "./AuthWithGoogleButton";

const meta: Meta<typeof AuthWithGoogleButton> = {
  title: "AuthWithGoogleButton",
  component: AuthWithGoogleButton,
};

export default meta;

export const AuthWithGoogleButtonSample: StoryObj<typeof AuthWithGoogleButton> =
  {};

export const AuthWithGoogleButtonWithLoading: StoryObj<
  typeof AuthWithGoogleButton
> = {
  args: {
    loading: true,
  },
};
