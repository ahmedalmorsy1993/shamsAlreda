import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("this field is required"),
  email: yup
    .string()
    .required("this field is required")
    .email("pls add valid email"),
  message: yup.string().required("this field is required")
});
