import * as yup from "yup";

export const schema = yup.object({
  password: yup.string().required(),
  email: yup
    .string()
    .required()
    .email(),

})  