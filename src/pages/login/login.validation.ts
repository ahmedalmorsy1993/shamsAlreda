import * as yup from "yup";

export const loginSchema = yup.object({
  password: yup.string().required(),
  email: yup
    .string()
    .required()
    .email(),

});
