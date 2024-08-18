import { Image, SizableText, YStack } from "tamagui";
import { OnboardingStep } from "types/onboarding";

interface OnboardingCardProps extends OnboardingStep {
  width?: number;
}

const OnboardingCard = ({
  description,
  image,
  title,
  width,
}: OnboardingCardProps) => {
  return (
    <YStack width={width} rowGap={30} alignItems="center">
      <Image mb={30} src={image} />

      <SizableText maxWidth={275} textAlign="center" size="$title1">
        {title}
      </SizableText>

      <SizableText
        maxWidth={275}
        textAlign="center"
        color="$light.20"
        size="$regular1"
      >
        {description}
      </SizableText>
    </YStack>
  );
};

export default OnboardingCard;
