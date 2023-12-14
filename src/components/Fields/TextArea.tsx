import { useFormContext } from "react-hook-form";
import { Props } from "./model";
import { FC } from "react";
import ErrorMessage from "./ErrorMessage";
const TextArea: FC<Props<HTMLTextAreaElement>> = ({ errors, name, ...props }) => {
    const { register } = useFormContext()

    const classNames: string = `${errors && errors[name] && 'border-red-500'}`

    return <div className=" min-h-[100px]">
        <div className="relative">
            <textarea rows={5} type="text" className={`py-2 px-3 outline-none border rounded  text-[18px] w-full ${classNames}`} {...register(name)} {...props} />
            <ErrorMessage errors={errors} name={name} />
        </div>
    </div>
}
export default TextArea