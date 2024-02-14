import Image from "@/components/Core/Image";
import { IProduct } from "./types";
import Button from '../../components/Button/index';
import { useTranslation } from "react-i18next";
import { useInterSection } from "@/hooks/useInterSection";
import { useNavigate } from "react-router-dom";
interface Props {
  product: IProduct
}

export default function ProductCard({ product }: Props) {
  const { t } = useTranslation()
  const { onScrollTo } = useInterSection()
  const navigate = useNavigate()

  const orderNow = () => {
    navigate('/')
    setTimeout(() => {
      onScrollTo('contact_us')
    }, 500);
  }
  return (
    <div className="min-h-[570px] rounded-[8px] border border-light-gray-200 overflow-hidden flex flex-col">
      <div className="h-[360px] overflow-hidden">
        <Image src={product.image} className="w-full h-full transition-all duration-500 object-fill hover:scale-125 ease-in-out" />
      </div>
      <div className="px-5 mt-6 pb-3 flex flex-col justify-between flex-grow ">
        <div>
          <h3 className="text-gray-400 text-[18pxx]">{product.title}</h3>
          <h2 className="text-third text-[20px]">{product.meta_description}</h2>
        </div>
        <Button onClick={orderNow} variant='outline' className="sticky bottom-0 mt-5">
          {t('button.order_now')}
        </Button>
      </div>
    </div>
  )
}
