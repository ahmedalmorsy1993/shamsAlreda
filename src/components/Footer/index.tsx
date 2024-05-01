import Image from "../Core/Image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation()

  const year = new Date().getFullYear()
  return (
    <div className="min-h-[445px] border-t border-t-light-gray-200 footer flex  items-center pt-10  ">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-3">
          <div className="w-full lg:w-9/12">
            <Image src="/logo.svg" />
          </div>

        </div>
        <p className="text-center mt-[100px] pb-[20px]">
          {t('footer.all_rights')} @{year}
        </p>
      </div>
    </div>
  )
}
