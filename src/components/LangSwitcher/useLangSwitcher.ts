import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { ILanguage, TLang } from "./types"

export const useLangSwitcher = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  const switcher_ref = useRef<HTMLDivElement | null>(null)
  const { i18n, t } = useTranslation()
  const languages: ILanguage[] = [
    { value: 'ar', icon: 'ar_flag.svg' },
    { value: 'en', icon: 'en_flag.svg' },
  ]

  const onToggle = () => {
    setToggle(!toggle)
  }
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isClickInside = switcher_ref.current?.contains(e.target as Node);
      if (!isClickInside) {
        setToggle(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [switcher_ref]);
  const onSwitchLang = (lang: TLang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }
  return {
    i18n,
    t,
    onToggle,
    toggle,
    languages,
    switcher_ref,
    onSwitchLang
  }

}