import { Input, InputProps } from "tamagui";
import InputWrapper, { InputWrapperProps } from "./InputWrapper";

export type TextInputProps = InputProps & InputWrapperProps & {};

const TextInput = ({ error, help , ...props}: TextInputProps) => {
  return (
    <InputWrapper error={error} help={help}>
      <Input
        theme="input"
        cursorColor="#7F3DFF"
        selectionColor="$violet.60"
        placeholderTextColor="$light.20"
        focusStyle={{ borderWidth: 2, color: "$light.20" }}
        borderRadius={16}
        paddingVertical={8}
        paddingHorizontal={16}
        borderWidth={1}
        borderColor={error ? "$red.100" : "$light.60"}
        size="$4"
        {...props}
      />
    </InputWrapper>
  );
};

export default TextInput;
