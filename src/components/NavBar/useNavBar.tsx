
import { useTranslation } from "react-i18next";
import { LinkType } from "./types";
import { useInterSection } from "@/hooks/useInterSection";
import { useEffect } from "react";

export default function useNavBar() {

  const { t } = useTranslation()
  const { onScrollTo, isIntersecting, target } = useInterSection()
  const links: LinkType[] = [
    { href: '/', text: t('navbar.home'), onScroll: () => onScrollTo('home'), active: isIntersecting && target == 'home' },
    { href: '/', text: t('navbar.our_products'), onScroll: () => onScrollTo('our_products'), active: isIntersecting && target == 'our_products' },
    { href: '/', text: t('navbar.contact_us'), onScroll: () => onScrollTo('contact_us'), active: isIntersecting && target == 'contact_us' },

  ]

  useEffect(() => {
  }, [])
  return {
    links,
  }
}
