import {
  TextArea as CoreTextArea,
  TextAreaProps as CoreTextAreaProps,
} from "tamagui";
import InputWrapper, { InputWrapperProps } from "./InputWrapper";

export type TextAreaProps = CoreTextAreaProps & InputWrapperProps & {};

const TextArea = ({ error, help }: TextAreaProps) => {
  return (
    <InputWrapper error={error} help={help}>
      <CoreTextArea
        theme="input"
        cursorColor="#7F3DFF"
        selectionColor="$violet.60"
        placeholderTextColor="$light.20"
        focusStyle={{ borderWidth: 2, color: "$light.60" }}
        borderRadius={16}
        paddingVertical={8}
        paddingHorizontal={16}
        borderWidth={1}
        borderColor={error ? "$red.100" : "$light.60"}
        size="$4"
      />
    </InputWrapper>
  );
};

export default TextArea;
