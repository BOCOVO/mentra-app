import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { SizableText, YStack } from "tamagui";

export interface InputWrapperProps extends PropsWithChildren {
  help?: string;
  error?: string;
}

const InputWrapper = ({ children, error, help }: InputWrapperProps) => {
  const { t } = useTranslation();

  return (
    <YStack rowGap="$2">
      {children}

      {error || help ? (
        <SizableText size="$tiny" color={error ? "red" : "gray"}>
          {error ? t(error) : help}
        </SizableText>
      ) : null}
    </YStack>
  );
};

export default InputWrapper;
