import { object } from "yup";
import { requiredString } from "./commons";

export const createCatFormValidation = object({
  title: requiredString,
  icon_name: requiredString,
});
