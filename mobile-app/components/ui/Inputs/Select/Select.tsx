import { useField } from "formik";

import SelectDumb, { SelectProps as SelectDumbProps } from "../dumbs/Select";

interface SelectProps<T>
  extends Omit<SelectDumbProps<T>, "value" | "onChange" | "error"> {
  name: string;
}

function Select<T>({ name, ...props }: SelectProps<T>) {
  const [{ value }, { error }, { setValue }] = useField<string>(name);

  return (
    <SelectDumb
      error={error}
      value={value}
      onChange={setValue}
      {...props}
    />
  );
}

export default Select;
