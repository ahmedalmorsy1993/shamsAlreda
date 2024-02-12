
import { useTranslation } from "react-i18next";
import { LinkType } from "./types";
import { useInterSection } from "@/hooks/useInterSection";

export default function useNavBar() {
  const { t } = useTranslation()
  const { onScrollTo, isIntersecting, target } = useInterSection()
  console.log(isIntersecting, target)
  const links: LinkType[] = [
    { text: t('navbar.home'), onScroll: () => onScrollTo('home'), active: isIntersecting && target == 'home' },
    { text: t('navbar.our_services'), onScroll: () => onScrollTo('our_services'), active: isIntersecting && target == 'our_services' },
    { text: t('navbar.about_us'), onScroll: () => onScrollTo('about_us'), active: isIntersecting && target == 'about_us' },
    { text: t('navbar.contact_us'), onScroll: () => onScrollTo('contact_us'), active: isIntersecting && target == 'contact_us' },

  ]
  return {
    links,
  }
}
