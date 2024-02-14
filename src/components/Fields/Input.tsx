import { useFormContext } from "react-hook-form";
import { Props } from "./model";
import { FC } from "react";
import ErrorMessage from "./ErrorMessage";
import { useTranslation } from "react-i18next";
import { useFormWrapperContext } from "./FormWrapper";
const Input: FC<Props<HTMLInputElement>> = ({ onIconClicked, icon, name, placeholder, label, ...props }) => {
  const { register } = useFormContext()
  const { errors } = useFormWrapperContext()
  const classNames: string = `${errors && errors[name] && 'border-red-500'}`
  const { t } = useTranslation()

  return (
    <div className=" min-h-[100px]">
      <div className="relative">
        <label htmlFor={label} className="mb-2 inline-block text-third">
          {t(`label.${label}`)}
        </label>
        <div className={` flex items-center py-2 px-3 outline-none border border-light-gray-200 rounded-[4px] h-[54px] text-[14px] w-full ${classNames}`}>
          <input id={label} type="text" className={` outline-none w-full`}
            {...register(name)} {...props} placeholder={t(`label.${placeholder}`)} />
          {icon && <i className={`${icon} cursor-pointer`} onClick={() => onIconClicked && onIconClicked()}></i>}
        </div>
        <ErrorMessage errors={errors} name={name} />
      </div>
    </div>
  )

}
export default Input