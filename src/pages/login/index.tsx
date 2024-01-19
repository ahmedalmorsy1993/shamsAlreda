import { FormWrapper } from "@/components/Fields/FormWrapper";
import Card from "@/components/Shared/Card";
import { useTranslation } from "react-i18next";
import { loginSchema } from "./login.validation";
import Input from "@/components/Fields/Input";
import Button from "@/components/Button";

export default function LoginPage() {
  const { t } = useTranslation();
  const defaultValues = {
    password: "",
    email: ""
  }
  return (
    <div className="container h-screen flex justify-center items-center ">
      <div className="w-full md:w-7/12 mx-auto">
        <Card className="p-4">
          <h2 className="text-center mt-3 text-3xl mb-3">{t('login')}</h2>
          <FormWrapper schema={loginSchema}
            onSubmit={function (data: unknown): void {
              console.log(data);
            }}
            defaultValues={defaultValues} >

            <Input name="email" type="email" placeholder="Enter Email Field" />
            <Input name="password" type="password" placeholder="Enter password Field" />
            <Button type="submit" classNames="mt-10">
              submit
            </Button>
          </FormWrapper>
        </Card>
      </div>
    </div>
  )
}
