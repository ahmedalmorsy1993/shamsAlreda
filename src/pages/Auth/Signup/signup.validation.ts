import * as yup from "yup";

export const schema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  password: yup.string().required(),
  email: yup
    .string()
    .required()
    .email(),

})  