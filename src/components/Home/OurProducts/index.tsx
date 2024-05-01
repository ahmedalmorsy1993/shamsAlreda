import { useTranslation } from "react-i18next"
import ProductCard from "./ProductCard"
import { useCard } from "./ProductCard/useCard"
import { Each } from "@/components/Core/Each"
import LoadMore from "@/components/Core/LoadMore"

export default function OurProducts() {
  const { t } = useTranslation()
  const { products, meta, loading, onLoadMore } = useCard()
  return (
    <div data-scroll='our_products' className="min-h-screen mt-12" >
      <div className="container">
        <h2 className="text-center text-[40px] text-third">
          {t('heading.our_products_title')}
        </h2>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Each of={products || []} render={(item) => <>
              <ProductCard product={item} />
            </>} />
          </div>

          <div className='my-10 flex justify-center'>
            <LoadMore meta={meta!} loading={loading} onClick={onLoadMore} />
          </div>
        </div>
      </div>
    </div>
  )
}
<div className='my-10 flex justify-center'>
</div>