import { useFormContext } from "react-hook-form";
import { Props } from "./model";
import { FC } from "react";
import ErrorMessage from "./ErrorMessage";
const Input: FC<Props<HTMLInputElement>> = ({ errors, onIconClicked, icon, name, ...props }) => {
  const { register } = useFormContext()

  const classNames: string = `${errors && errors[name] && 'border-red-500'}`

  return <div className=" min-h-[80px]">
    <div className="relative">
      <div className={` flex items-center py-2 px-3 outline-none border rounded-lg h-[46px] text-[18px] w-full ${classNames}`}>
        <input type="text" className={` outline-none w-full`}
          {...register(name)} {...props} />

        {icon && <i className={`${icon} cursor-pointer`} onClick={() => onIconClicked && onIconClicked()}></i>}
      </div>
      <ErrorMessage errors={errors} name={name} />
    </div>
  </div>
}
export default Input