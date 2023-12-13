import { useProductStore } from "@/store/product";
import { LinkType } from "./model";

export default function useNavBar() {
  const links: LinkType[] = [
    { text: "Home", to: '/' },
    { text: "Contact Us", to: '/contact-us' },
  ]
  const cart = useProductStore(state => state.cart)

  return {
    links,
    cart
  }
}
