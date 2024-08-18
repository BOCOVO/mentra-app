import type { Meta, StoryObj } from "@storybook/react";
import OnboardingCard from "./OnboardingCard";

const meta: Meta<typeof OnboardingCard> = {
  title: "OnboardingCard",
  component: OnboardingCard,
};

export default meta;

export const OnboardingCardSimple: StoryObj<typeof OnboardingCard> = {
  args: {
    title: "Gain total control of your money",
    description: "Become your own money manager and make every cent count",
    image: require("../../assets/illus/onboarding_cash_1.png"),
  },
};
