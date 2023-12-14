import { useFormContext } from "react-hook-form";
import { Props } from "./model";
import { FC } from "react";
import ErrorMessage from "./ErrorMessage";
const Input: FC<Props<HTMLInputElement>> = ({ errors, name, ...props }) => {
  const { register } = useFormContext()

  const classNames: string = `${errors && errors[name] && 'border-red-500'}`

  return <div className=" min-h-[70px]">
    <div className="relative">
      <input type="text" className={`py-2 px-3 outline-none border rounded h-[46px] text-[18px] w-full ${classNames}`} {...register(name)} {...props} />
      <ErrorMessage errors={errors} name={name} />
    </div>
  </div>
}
export default Input