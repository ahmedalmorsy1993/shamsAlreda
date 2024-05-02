import { IProduct } from '../Home/OurProducts/ProductCard/types'
import Image from '../Core/Image'
import { useCartStore } from '@/store/cart'
import { useEffect, useState } from 'react'

interface IProps {
  product: IProduct
}
export default function CartItem({ product }: IProps) {
  const { removeFormCart } = useCartStore()
  const [qty, setQty] = useState(product.productQty)

  const onRemoveCartItem = () => {
    setQty(() => qty - 1)

  }
  useEffect(() => {
    if (qty == 0) {
      removeFormCart(product.id);
    }
  }, [qty])
  return (
    <div className='border border-slate-200 p-2 rounded-md flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <Image src={product?.image?.url} className='w-[100px] h-[100px] rounded-md' />
        <div className='flex flex-col gap-2'>
          <span>{product.title}</span>
          <strong>{product.price} EG</strong>
          <strong>({qty}) Quantity</strong>
        </div>
      </div>
      <i onClick={onRemoveCartItem} className='fa-solid fa-trash text-red-700 text-[20px] cursor-pointer me-6'></i>
    </div>
  )
}
