import { useCartStore } from '@/store/cart'
import { Link } from 'react-router-dom'

export default function CartItem() {
  const { cartItems } = useCartStore()

  const itemsCount = cartItems.length
  return (
    <Link to='/cart' className="relative cursor-pointer">
      {itemsCount > 0 && <sup className="h-[20px] absolute w-[20px] top-[-18px] right-[-10px] bg-primary text-white rounded-[50%] flex items-center justify-center">
        {itemsCount}

      </sup>}
      <i className="fa-solid fa-cart-shopping text-[20px] "></i>
    </Link>

  )
}
