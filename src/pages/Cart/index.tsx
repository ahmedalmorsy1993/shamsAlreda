import Button from "@/components/Button"
import { useProductStore } from "@/store/product"

export default function CartPage() {
  const cart = useProductStore(state => state.cart)
  const removeFromCart = useProductStore(state => state.removeFromCart)
  return (
    <div className="container mt-4">
      <div className="w-full sm:w-8/12 mx-auto">
        {cart && cart.length > 0 ? (cart.map((item) => (
          <div key={item.id} className="flex items-center mb-2 justify-between border rounded shadow-sm p-5">
            <div className="flex items-center gap-3">
              <div className="w-[100px] h-[100px]">
                <img src={item.image} alt={item.title} className="object-contain w-full h-full" />
              </div>
              <h4>
                {item.title}
              </h4>
            </div>
            <Button onClick={() => removeFromCart(item.id)} classNames="w-[100px]">
              Remove
            </Button>
          </div>

        ))) : <h2 className="text-center text-[20px] capitalize"> no product in cart</h2>}

      </div>
    </div>
  )
}
