
import { useTranslation } from "react-i18next";
import { LinkType } from "./types";
import { useInterSection } from "@/hooks/useInterSection";
import { useEffect } from "react";
import { useSettingsStore } from "@/store/settings";

export default function useNavBar() {
  const settingStore = useSettingsStore()

  const { t } = useTranslation()
  const { onScrollTo, isIntersecting, target } = useInterSection()
  const links: LinkType[] = [
    { href: '/', text: t('navbar.home'), onScroll: () => onScrollTo('home'), active: isIntersecting && target == 'home' },
    { href: '/', text: t('navbar.our_services'), onScroll: () => onScrollTo('our_services'), active: isIntersecting && target == 'our_services' },
    { href: '/', text: t('navbar.about_us'), onScroll: () => onScrollTo('about_us'), active: isIntersecting && target == 'about_us' },
    { href: '/', text: t('navbar.contact_us'), onScroll: () => onScrollTo('contact_us'), active: isIntersecting && target == 'contact_us' },

  ]

  useEffect(() => {
    settingStore.getSettings()
    settingStore.getAboutPage()
  }, [])
  return {
    links,
  }
}
