import { LinkType } from "./model";

export default function useNavBar() {
  const links: LinkType[] = [
    { text: "Home", to: '/' },
    { text: "Contact Us", to: '/contact-us' },
  ]


  return {
    links
  }
}
