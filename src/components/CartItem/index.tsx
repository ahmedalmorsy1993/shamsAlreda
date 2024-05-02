import { IProduct } from '../Home/OurProducts/ProductCard/types'
import Image from '../Core/Image'

interface IProps {
  product: IProduct
}
export default function CartItem({ product }: IProps) {
  return (
    <div className='border border-slate-200 p-2 rounded-md flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <Image src={product?.image?.url} className='w-[100px] h-[100px] rounded-md' />
        <div className='flex flex-col gap-2'>
          <span>{product.title}</span>
          <strong>{product.price} EG</strong>
        </div>
      </div>
    </div>
  )
}
