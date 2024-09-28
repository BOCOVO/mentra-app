import { string, number } from "yup";

export const requiredString = string().required("validation.required");
export const requiredNumber = number().required("validation.required");
