import { useField } from "formik";

import TextInputDumb, {
  TextInputProps as TextInputDumbProps,
} from "../dumbs/TextInput";

interface TextInputProps
  extends Omit<TextInputDumbProps, "value" | "onChange" | "error"> {
  name: string;
}

const TextInput = ({ name, ...props }: TextInputProps) => {
  const [{ value }, { error }, { setValue }] = useField<string>(name);

  return (
    <TextInputDumb
      error={error}
      value={value}
      onChangeText={setValue}
      {...props}
    />
  );
};

export default TextInput;
