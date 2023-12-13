import { PropsWithChildren } from "react";

export default function Button({ children, classNames, ...props }: PropsWithChildren<{ classNames?: string, [key: string]: any }>) {
  return (
    <button className={`outline-none transition-all border border-transparent duration-500 bg-red-800 text-white rounded flex items-center justify-center py-2 px-4 w-full ${classNames}`} {...props}>
      {children}
    </button>
  )
}
