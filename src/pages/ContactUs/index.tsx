
import Button from "@/components/Button";
import { FormWrapper } from "@/components/Fields/FormWrapper";
import Input from "@/components/Fields/Input";
import TextArea from "@/components/Fields/TextArea";
import { schema } from "./contactValidation";


export default function ContactUs() {
  const defaultValues = {
    name: "",
    email: "",
    message: ""
  };
  return (
    <div className="container">
      <div className="mx-auto w-full sm:w-8/12 md:w-6/12  rounded shadow-lg p-5 mt-8">
        <h2 className="text-center capitalize text-[20px]">Contact Us</h2>
        <FormWrapper schema={schema}
          onSubmit={function (data: unknown): void {
            console.log(data);
          }} defaultValues={defaultValues}>
          <Input placeholder="Name" name="name" />
          <Input placeholder="email" type="email" name="email" />
          <TextArea placeholder="message" name="message" />
          <Button type="submit" classNames="mt-10">
            submit
          </Button>
        </FormWrapper>
      </div>
    </div>
  )
}


