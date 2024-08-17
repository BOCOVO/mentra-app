import { ComponentProps, forwardRef, LegacyRef } from "react";
import { Button as CoreButton, TamaguiElement } from "tamagui";

interface ButtonProps extends ComponentProps<typeof CoreButton> {}

const Button = forwardRef(
  (props: ButtonProps, ref: LegacyRef<TamaguiElement>) => {
    return (
      <CoreButton
        paddingHorizontal={30}
        borderRadius={16}
        height={56}
        ref={ref}
        fontSize={18}
        fontWeight="600"
        {...props}
      />
    );
  }
);

export default Button;
