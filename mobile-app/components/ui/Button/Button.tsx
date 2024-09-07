import { ComponentProps, forwardRef, LegacyRef } from "react";
import { Button as CoreButton, Spinner, TamaguiElement } from "tamagui";

interface ButtonProps extends ComponentProps<typeof CoreButton> {
  loading?: boolean;
}

const Button = forwardRef(
  (props: ButtonProps, ref: LegacyRef<TamaguiElement>) => {
    return (
      <CoreButton
        paddingHorizontal={30}
        borderRadius={16}
        height={45}
        ref={ref}
        fontSize={16}
        fontWeight="600"
        icon={props.loading ? <Spinner /> : props.icon}
        {...props}
      />
    );
  }
);

export default Button;
