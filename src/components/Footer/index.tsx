import { useSettingsStore } from "@/store/settings";
import Image from "../Core/Image";
import { useTranslation } from "react-i18next";
import { Each } from "../Core/Each";
import { ISocialContact } from "../TopBar/types";

export default function Footer() {
  const { settings } = useSettingsStore()
  const { t } = useTranslation()
  const socials: ISocialContact[] = [
    { icon: 'dark_phone.svg', href: `tel:${settings['phone']}`, name: settings['phone'] },
    { icon: 'dark_email.svg', href: `mailto:${settings['contact_email']}`, name: settings['contact_email'] },
    { icon: 'dark_location.svg', href: '', name: settings['address'] },
  ]
  const year = new Date().getFullYear()
  return (
    <div className="min-h-[445px] border-t border-t-light-gray-200 footer flex  items-center pt-10  ">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-3">
          <div className="w-full lg:w-9/12">
            <Image src="/logo.svg" />
            <p className="mt-5 leading-[26px] font-normal text-third">
              {settings['website_bio']}
            </p>
          </div>
          <div className="w-full lg:w-3/12 ">
            <h2 className="font-bold">
              {t('heading.contact_us_title')}
            </h2>
            <ul className="flex gap-3 flex-col mt-7">
              <Each of={socials} render={(item) => (
                <a href={item.href ? item.href : undefined}>
                  <li className="flex items-center gap-3 mb-4">
                    <Image src={`/icons/${item.icon}`} width={20} height={20} />
                    <span className="text-dark-gray">
                      {item.name}
                    </span>
                  </li>
                </a>

              )} />
            </ul>
          </div>
        </div>
        <p className="text-center mt-[100px] pb-[20px]">
          {t('footer.all_rights')} @{year}
        </p>
      </div>
    </div>
  )
}
