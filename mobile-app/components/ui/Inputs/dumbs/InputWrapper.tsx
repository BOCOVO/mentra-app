import { PropsWithChildren } from "react";
import { SizableText, YStack } from "tamagui";

export interface InputWrapperProps extends PropsWithChildren {
  help?: string;
  error?: string;
}

const InputWrapper = ({ children, error, help }: InputWrapperProps) => {
  return (
    <YStack rowGap="$2">
      {children}

      {error || help ? (
        <SizableText size="$tiny" color={error ? "red" : "gray"}>
          {error || help}
        </SizableText>
      ) : null}
    </YStack>
  );
};

export default InputWrapper;
