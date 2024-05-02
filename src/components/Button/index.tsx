
import { VariantProps, cva } from 'class-variance-authority'
import { ButtonProps } from './types';
import { cn } from "@/utils/cn";
import { ElementType } from 'react';
const buttonVariants = cva('flex items-center justify-center  w-[167px] h-[56px] rounded-[8px] py-[16px] px-[24px] gap-3 transition-all duration-300 ', {
  variants: {
    variant: {
      default: 'bg-primary text-white hover:bg-white hover:border hover:border-primary hover:text-primary',
      outline: 'bg-white border border-primary text-primary hover:bg-primary hover:text-white'
    },

  },
  defaultVariants: {
    variant: 'default',
  }
})
interface Props extends VariantProps<typeof buttonVariants>, ButtonProps {
  as?: ElementType | React.ComponentType<any>;
}
export default function Button({ children, loading, as, variant, className, ...props }: Props) {
  const Component = as || 'button'
  return (
    <Component disabled={loading} className={cn(buttonVariants({ className, variant }))} {...props}>
      {loading ? <i className="fa-solid fa-spinner animate-spin block"></i> : children}
    </Component>
  )
}
