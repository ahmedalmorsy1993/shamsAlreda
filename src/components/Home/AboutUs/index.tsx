import Button from "@/components/Button"
import Image from "@/components/Core/Image"
import { useSettingsStore } from "@/store/settings"
import { cn } from "@/utils/cn"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export default function AboutUs() {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir(i18n.language)
  const { aboutPage } = useSettingsStore()
  return (
    <div data-scroll='about_us' className="min-h-screen bg-light-gray flex items-center" >
      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-[640]">
          <div>
            <h3 className="text-primary text-[28px]">
              {aboutPage.title}
            </h3>
            <h2 className="text-third text-[18px] lg:text-[32px] leading-[31.6px] lg:leading-[41.6px] mt-4">
              {aboutPage.meta_description}
            </h2>
            <Button as={Link} to="/about-us" className=" my-4" >
              <span>{t('button.now_more')}</span>
              <i className={cn("fa-solid fa-chevron-left animate-pulse duration-200", dir === 'ltr' && 'rotate-180')}></i>
            </Button>
            <div className="h-[385px] overflow-hidden rounded-[8px] mt-8">
              <Image src="/images/hero.svg" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="h-full overflow-hidden rounded-[8px]">
            <Image src="/images/about.svg" className="h-full w-full object-cover" />

          </div>
        </div>
      </div>
    </div>
  )
}
