import Button from "@/components/Button"
import CartItem from "@/components/CartItem"
import { Each } from "@/components/Core/Each"
import { useCartStore } from "@/store/cart"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Cart() {
  const { cartItems, bookNow, clearItems } = useCartStore()
  const [loading, setLoading] = useState<boolean>(false)
  const { t } = useTranslation()

  const handleOrder = async () => {
    try {
      setLoading(true)
      const orders = cartItems.map(el => ({
        product_id: el.id,
        price: el.price,
        quantity: el.productQty
      }))
      await bookNow(orders)
      clearItems()
    } finally {
      setLoading(false)

    }
  }
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

          <Button onClick={handleOrder} loading={loading}>{t('button.order_now')}</Button>
        </div>
      </div>
    </div>
  )
}
