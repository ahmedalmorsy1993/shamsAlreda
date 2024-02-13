import Button from "@/components/Button"
import Image from "@/components/Core/Image"
import { cn } from "@/utils/cn"
import { useTranslation } from "react-i18next"
import { IStatic } from "./types"
import { Each } from "@/components/Core/Each"

export default function AboutUs() {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir(i18n.language)
  const statistics: IStatic[] = [
    { count: 512, title: 'الخدمات المقدمة' },
    { count: 512, title: 'العملاء ' },
    { count: 512, title: ' سنوات الخبره' },
  ]
  return (
    <div data-scroll='about_us' className="min-h-screen bg-light-gray flex items-center" >
      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-primary text-[28px]">{t('heading.about_us_title')}</h3>
            <h2 className="text-third text-[32px] leading-[41.6px] mt-4">
              مؤسسة شمس الرضا التجارية
              لصناعة المعجنات وتقديم خدمات للضيوف
            </h2>
            <p className="text-gray font-normal leading-[36px] text-[18px] mt-4">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،
            </p>
            <Button className=" my-4" >
              <span>{t('button.now_more')}</span>
              <i className={cn("fa-solid fa-chevron-left animate-pulse duration-200", dir === 'ltr' && 'rotate-180')}></i>
            </Button>
            <div className="h-[300px] overflow-hidden rounded-[8px] mt-8">
              <Image src="/images/hero.svg" className="h-full w-full object-cover" />
            </div>
          </div>
          <div>
            <ul className="flex items-center justify-end gap-10 mb-5">
              <Each of={statistics} render={(item) => (
                <li className="flex flex-col items-center justify-center gap-2">
                  <strong className="text-third text-[44px]">{item.count}</strong>
                  <span className="text-gray text-[20px]">{item.title}</span>
                </li>
              )} />
            </ul>
            <div className="h-[512px] overflow-hidden rounded-[8px]">
              <Image src="/images/about.svg" className="h-full w-full object-cover" />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
