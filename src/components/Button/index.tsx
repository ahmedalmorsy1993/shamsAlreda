import { PropsWithChildren } from "react";
import { Props } from "./types";

export default function Button({ children, loading, className, ...props }: PropsWithChildren<Props>) {
  return (
    <button disabled={loading} className={`outline-none transition-all border border-transparent duration-500 bg-slate-800 text-white rounded-lg flex items-center justify-center py-2 px-4 w-full text-xl capitalize min-h-[46px] ${className}`} {...props}>
      {loading ? <i className="fa-solid fa-spinner animate-spin block"></i> : children}

    </button>
  )
}
