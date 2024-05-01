import Button from "@/components/Button";
import { cn } from "@/utils/cn";
import Image from "@/components/Core/Image";
import { IProduct } from "./types";
import { useCartStore } from "@/store/cart";
import { useTranslation } from "react-i18next";

interface IProps {
  product: IProduct
}

export default function ProductCard({ product }: IProps) {
  const { addToCart, cartItems } = useCartStore()
  const { t } = useTranslation()
  const existingProductQty = cartItems.filter(el => el.id == product.id).length;
  const canAdd = existingProductQty < product.quantity

  const handleAddToCart = () => {
    addToCart(product)

  }
  return (
    <div className="shadow-sm rounded-[8px] overflow-hidden transition-all duration-200 hover:shadow-md group " >
      <div className="h-[300px] overflow-hidden ">
        <Image src={product?.image?.url} className="object-fill h-full w-full group-hover:scale-125 transition-all duration-200" />
      </div>
      <div className={cn('  px-5 py-3  ')}>
        <div className="text-third capitalize font-bold flex items-center gap-6 justify-between ">
          <span>
            {product.title}
          </span>
          <strong className="  text-primary flex justify-center items-center py-1 px-2">
            {product.quantity > 0 ? `${product.price} Eg` : 'out of stock'}
          </strong>
        </div>
        <hr className="my-3 text-slate-200" />

        {product.quantity > 0 && <div className="flex items-center gap-4">
          <Button disabled={!canAdd} onClick={handleAddToCart} variant='outline' className="w-[56px] rounded-[50px] disabled:bg-slate-300 disabled:border-0 disabled:text-white"  >
            <i className={cn("fa-solid fa-cart-shopping animate-pulse duration-200")}></i>
          </Button>
          <p className="flex items-center gap-2 text-[14px] text-gray-700">
            {canAdd ? t('label.available_product_count') : t('label.you_added_all_available_product_into_cart')}
            {canAdd && <strong>{product.quantity}</strong>}
          </p>
        </div>}

      </div>
    </div>


  )
}
