import Image from "../Core/Image"
import { cn } from "@/utils/cn"
import { Each } from "../Core/Each"
import { useLangSwitcher } from "./useLangSwitcher"

export default function LangSwitcher() {
  const { i18n, languages, t, onToggle, toggle, switcher_ref, onSwitchLang } = useLangSwitcher()

  return (
    <div className="min-w-[120px] flex items-center gap-2 cursor-pointer relative" onClick={onToggle} ref={switcher_ref}>
      <Image src={`/icons/${i18n.language}_flag.svg`} width={20} height={20} />
      <span>{t(`languages.${i18n.language}`)}</span>
      <Image className={cn('transition-all duration-300', toggle && 'rotate-180')} src="/icons/arrow_down.svg" width={20} height={20} />
      <ul className={
        cn('w-full shadow-card transition-all h-fit duration-300 flex gap-3 p-3  justify-center flex-col rounded-md z-50 bg-white absolute inset-0 top-[30px]', toggle ? 'scale-y-100' : 'scale-y-0')}>
        <Each of={languages} render={(item) => (
          <li className="flex items-center gap-2 " onClick={() => onSwitchLang(item.value)}>
            <Image src={`/icons/${item.icon}`} width={20} height={20} />
            <span className={cn(item.value === i18n.language && 'text-primary')}>{t(`languages.${item.value}`)}</span>
          </li>
        )} />
      </ul>
    </div>
  )
}
