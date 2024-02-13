import Button from "@/components/Button";
import { Each } from "@/components/Core/Each";
import { cn } from "@/utils/cn";
// import Image from "@/components/Core/Image";
import { useTranslation } from "react-i18next";
import { useCardService } from "./useCardService";
import Image from "@/components/Core/Image";
import { Link } from "react-router-dom";

export default function ServiceCard() {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir(i18n.language)
  const { categories } = useCardService()
  return (
    <Each of={categories} render={(_item, index) => (
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
        <div className="h-[423px] overflow-hidden rounded-[8px]">
          <Image src={_item.image} className="object-fill h-full w-full" />
        </div>
        <div className={cn('  px-2 pt-5 lg:pt-0 sm:px-8 flex flex-col items-start justify-between gap-5 ', ((index % 2 !== 0) && 'order-last lg:order-first'))}>
          <h3 className="text-primary text-[20px] font-bold ">
            {_item.title}
          </h3>
          <div className="flex flex-col gap-3">
            <h2 className="text-third text-[20px] leading-[30px] lg:text-[30px]  xl:text-[40px] sm:leading-[60px] ">
              {_item.meta_description}
            </h2>
            <div className="text-gray text-[16px] sm:text-[18px] font-normal leading-[32px]" dangerouslySetInnerHTML={{ __html: _item.description }}>

            </div>
          </div>
          <Button variant='outline' as={Link} to={`/products/${_item.id}`} >
            <span>{t('button.now_more')}</span>
            <i className={cn("fa-solid fa-chevron-left animate-pulse duration-200", dir === 'ltr' && 'rotate-180')}></i>
          </Button>
        </div>
      </div>
    )}></Each>

  )
}
