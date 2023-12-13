import { Product } from '@/components/Products/model';
import { create } from 'zustand'

interface State {
  cart: Product[];
}

interface Action {
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

export const useProductStore = create<State & Action>((set) => ({
  cart: [],

  addToCart: (product: Product) => set((state) => ({ ...state, cart: [...state.cart, product] })),
  removeFromCart: (id: number) => set((state) => ({ ...state, cart: state.cart.filter(p => p.id !== id) })),
}))