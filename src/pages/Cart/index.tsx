import CartItem from "@/components/CartItem"
import { Each } from "@/components/Core/Each"
import { useCartStore } from "@/store/cart"
import { useTranslation } from "react-i18next"

export default function Cart() {
  const { cartItems } = useCartStore()
  const { t } = useTranslation()
  if (cartItems.length == 0) {
    return <div className="min-h-screen flex justify-center items-center">{t('label.no_items_in_cart')}</div>
  }

  return (
    <div className="min-h-screen">
      <div className="container mt-5">
        <div className="w-full md:w-8/12 mx-auto space-y-4">
          <Each of={cartItems} render={(item) => <>
            <CartItem product={item} />
          </>} />
        </div>
      </div>
    </div>
  )
}
