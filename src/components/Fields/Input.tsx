import { useFormContext } from "react-hook-form";
import { Props } from "./model";

export default function Input(props: Props<HTMLInputElement>) {
  const { register, getFieldState, watch } = useFormContext()
  const { error, invalid, isDirty } = getFieldState(props.name)

  watch(props.name)
  const classNames: string = `${!invalid && isDirty && 'border-red-500'}`
  return <div className=" min-h-[50px]">
    <div className="relative">
      <input type="text" className={`py-2 px-3 outline-none border rounded h-[46px] text-[18px] w-full ${classNames}`} {...register(props.name)} {...props} />
      {!invalid && isDirty && (<p className={`text-red-500 duration-500 transition-all absolute bottom-[-25px] `}>{error?.message}</p>)}
    </div>
  </div>
}
