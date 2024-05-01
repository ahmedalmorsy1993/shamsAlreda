import * as yup from "yup";

export const contactSchema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  phone: yup.string().required(),
  message: yup.string().required(),
  email: yup
    .string()
    .required()
    .email(),

})  