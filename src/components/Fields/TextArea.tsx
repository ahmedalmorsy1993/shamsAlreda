import { useFormContext } from "react-hook-form";
import { Props } from "./types";
import { FC } from "react";
import ErrorMessage from "./ErrorMessage";
import { useTranslation } from "react-i18next";
import { useFormWrapperContext } from "./FormWrapper";
import { cn } from "@/utils/cn";
const TextArea: FC<Props<HTMLTextAreaElement>> = ({ label, name, className, placeholder, ...props }) => {
    const { register } = useFormContext()
    const { t } = useTranslation()
    const { errors } = useFormWrapperContext()

    const classNames: string = `${errors && errors[name] && 'border-red-500'}`

    return <div className={cn(" min-h-[100px]", className)}>
        <label htmlFor={label} className="mb-2 inline-block text-third">
            {t(`label.${label}`)}
        </label>
        <div className="relative">
            <textarea id={label} rows={5} type="text" className={cn(`py-2 px-3 outline-none  border border-light-gray-200 rounded-[4px]  text-[14px] w-full`, classNames)} {...register(name)} {...props} placeholder={t(`label.${placeholder}`)} />
            <ErrorMessage errors={errors} name={name} />
        </div>
    </div>
}
export default TextArea