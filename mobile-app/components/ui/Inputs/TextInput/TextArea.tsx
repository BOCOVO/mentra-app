import { useField } from "formik";

import TextAreaDumb, {
  TextAreaProps as TextAreaDumbProps,
} from "../dumbs/TextArea";

interface TextAreaProps
  extends Omit<TextAreaDumbProps, "value" | "onChange" | "error"> {
  name: string;
}

const TextArea = ({ name, ...props }: TextAreaProps) => {
  const [{ value }, { error }, { setValue }] = useField<string>(name);

  return (
    <TextAreaDumb
      error={error}
      value={value}
      onChangeText={setValue}
      {...props}
    />
  );
};

export default TextArea;
