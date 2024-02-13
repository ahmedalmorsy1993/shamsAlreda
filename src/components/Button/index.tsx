
import { VariantProps, cva } from 'class-variance-authority'
import { ButtonProps } from './types';
import { cn } from "@/utils/cn";
const buttonVariants = cva('flex items-center justify-center h-[56px] rounded-[8px] py-[16px] px-[24px] mx-auto transition-all duration-300 ', {
  variants: {
    variant: {
      default: 'bg-primary text-white',
      outline: 'bg-white border border-primary text-primary'
    },

  },
  defaultVariants: {
    variant: 'default',
  }
})
interface Props extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants>, ButtonProps { }
export default function Button({ children, loading, variant, className, ...props }: Props) {

  return (
    <button disabled={loading} className={cn(buttonVariants({ className, variant }))} {...props}>
      {loading ? <i className="fa-solid fa-spinner animate-spin block"></i> : children}
    </button>
  )
}
