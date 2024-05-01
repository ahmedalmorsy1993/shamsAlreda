import { IProduct } from "@/components/Home/OurProducts/ProductCard/types";
import { create } from "zustand";


interface Actions {
  addToCart: (product: IProduct) => void;
  removeFormCart: (prodId: number) => void;
}
interface State {
  cartItems: IProduct[]
}

export const useCartStore = create<State & Actions>(set => ({
  cartItems: JSON.parse(localStorage.getItem('cart') as string) || [],
  addToCart(product) {
    set(state => {
      const items = [...state.cartItems, product] || []
      localStorage.setItem('cart', JSON.stringify(items));
      return { ...state, cartItems: items }
    })
  },
  removeFormCart(id) {
    set(state => {
      const newState = { ...state, cartItems: state.cartItems.filter(el => el.id !== id) }
      localStorage.setItem('cart', JSON.stringify(newState.cartItems));

      return newState
    })
  },


}))