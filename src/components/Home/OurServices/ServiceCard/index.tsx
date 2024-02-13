import Button from "@/components/Button";
import { Each } from "@/components/Core/Each";
import { cn } from "@/utils/cn";
// import Image from "@/components/Core/Image";
import { useTranslation } from "react-i18next";

export default function ServiceCard() {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir(i18n.language)
  return (
    <Each of={Array.from({ length: 2 })} render={(_item, index) => (
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
        <div className="h-[423px] overflow-hidden rounded-[8px]">
          <div className="bg-primary h-full w-full "></div>
          {/* <Image src="/images/food.svg" className="object-fill h-full w-full" /> */}
        </div>
        <div className={cn('  px-2 pt-5 lg:pt-0 sm:px-8 flex flex-col items-start justify-between gap-5 ', ((index % 2 !== 0) && 'order-last lg:order-first'))}>
          <h3 className="text-primary text-[20px] font-bold ">
            صناعة المعجنات

          </h3>
          <div className="flex flex-col gap-3">
            <h2 className="text-third text-[20px] leading-[30px] lg:text-[30px]  xl:text-[40px] sm:leading-[60px] ">
              تقديم وصناعة افخر انواع المعجنات المختلفة والفريدة
            </h2>
            <p className="text-gray text-[16px] sm:text-[18px] font-normal leading-[32px]">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
            </p>
          </div>
          <Button className="w-full lg:w-fit" variant='outline'>
            <span>{t('button.now_more')}</span>
            <i className={cn("fa-solid fa-chevron-left animate-pulse duration-200", dir === 'ltr' && 'rotate-180')}></i>
          </Button>
        </div>
      </div>
    )}></Each>

  )
}
