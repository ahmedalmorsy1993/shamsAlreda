
import Button from "@/components/Button";
import { FormWrapper } from "@/components/Fields/FormWrapper";
import Input from "@/components/Fields/Input";
import * as yup from "yup"


const schema = yup
  .object({
    firstName: yup.string().required('this field is required'),
  })




export default function ContactUs() {
  return (
    <div className="container">
      <div className="mx-auto w-full sm:w-6/12  rounded shadow-lg p-5 mt-8">
        <h2 className="text-center capitalize text-[20px]">Contact Us</h2>
        <FormWrapper schema={schema}
          onSubmit={function (data: unknown): void {
            console.log(data);
          }} defaultValues={{ firstName: '' }}>
          <Input placeholder="first Name" name="firstName" />

          <Button type="submit" classNames="mt-5">
            submit
          </Button>
        </FormWrapper>
      </div>
    </div>
  )
}


