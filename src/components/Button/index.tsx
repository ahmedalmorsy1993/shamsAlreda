import { PropsWithChildren } from "react";

export default function Button({ children, classNames }: PropsWithChildren<{ classNames: string }>) {
  return (
    <button className={`outline-none transition-all border border-transparent duration-500 bg-red-800 text-white rounded flex items-center justify-center py-2 px-4 w-full ${classNames}`} >
      {children}
    </button>
  )
}
