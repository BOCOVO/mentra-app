import { useField } from "formik";
import CategoryIconPicker from "./CategoryIconPicker";
import InputWrapper from "components/ui/Inputs/dumbs/InputWrapper";
import { SizableText } from "tamagui";

interface CategoryIconPickerFieldProps {
  name: string;
  label: string;
}

const CategoryIconPickerField = ({
  name,
  label,
}: CategoryIconPickerFieldProps) => {
  const [{ value }, { error }, { setValue }] = useField(name);
  return (
    <InputWrapper error={error}>
      <SizableText>{label}</SizableText>
      <CategoryIconPicker selectedKey={value} onSelect={setValue} />
    </InputWrapper>
  );
};

export default CategoryIconPickerField;
