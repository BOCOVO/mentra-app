import { string } from "yup";

export const requiredString = string().required("validation.required");
