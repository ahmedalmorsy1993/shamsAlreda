import { PropsWithChildren } from "react";

export default function Button({ children, classNames, ...props }: PropsWithChildren<{ classNames?: string, [key: string]: any }>) {
  return (
    <button className={`outline-none transition-all border border-transparent duration-500 bg-slate-800 text-white rounded-lg flex items-center justify-center py-2 px-4 w-full text-xl capitalize ${classNames}`} {...props}>
      {children}
    </button>
  )
}
