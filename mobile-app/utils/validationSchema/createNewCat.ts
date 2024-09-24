import { object } from "yup";
import { requiredString } from "./commons";

export const createCatFormValidation = object({
  title: requiredString,
  iconName: requiredString,
});
