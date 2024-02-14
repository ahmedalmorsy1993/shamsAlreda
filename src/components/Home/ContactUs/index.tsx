import ContactForm from "@/components/ContctForm"
import { Each } from "@/components/Core/Each"
import Image from "@/components/Core/Image"
import { ISocialContact } from "@/components/TopBar/types"
import { useSettingsStore } from "@/store/settings"
import { useTranslation } from "react-i18next"

export default function ContactUs() {
  const { t } = useTranslation()
  const { settings } = useSettingsStore()
  const socials: ISocialContact[] = [
    { icon: 'phone.svg', href: `tel:${settings['phone']}`, name: settings['phone'] },
    { icon: 'email.svg', href: `mailto:${settings['contact_email']}`, name: settings['contact_email'] },
    { icon: 'location.svg', href: '', name: settings['address'] },
  ]
  return (
    <div data-scroll='contact_us' className="min-h-screen flex items-center" >
      <div className="container">
        <h2 className="text-center text-third text-[40px] ">   {t('heading.contact_us_title')}</h2>
        <div className="min-h-[670px] rounded-[10px] shadow-card mt-10 p-4 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="relative isolate rounded-[10px] overflow-hidden ">
            <Image src="/images/contact_us.svg" className="h-full w-full object-cover absolute inset-0 z-[-1]" />
            <div className=" px-8 py-16 lg:px-16 flex items-start flex-col justify-between h-full">
              <div className="flex flex-col gap-5 justify-between">
                <div>
                  <h2 className="text-white text-[24px]">
                    {t('heading.contact_with_us')}
                  </h2>
                  <p className="text-white text-[24px] mt-5">
                    {t('heading.contact_on_links')}
                  </p>
                </div>
                <ul className="flex gap-3 flex-col mt-4">
                  <Each of={socials} render={(item) => (
                    <a href={item.href ? item.href : undefined}>
                      <li className="flex items-center gap-3 ">
                        <Image src={`/icons/${item.icon}`} width={20} height={20} />
                        <span className="text-white">
                          {item.name}
                        </span>
                      </li>
                    </a>

                  )} />
                </ul>
              </div>
              {/* <div>
                <ul className="flex gap-3 flex-col">
                  <Each of={socials} render={(item) => (
                    <li className="flex items-center gap-3">
                      <Image src={`/icons/${item.icon}`} />
                      <span className="text-white">
                        {item.name}
                      </span>
                    </li>
                  )} />
                </ul>
              </div> */}
            </div>
          </div>
          <div className="flex items-center w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
