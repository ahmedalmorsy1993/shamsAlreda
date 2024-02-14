import Image from '@/components/Core/Image'
import { useProducts } from './useProducts'
import Loader from '@/components/Loader'
import { Each } from '@/components/Core/Each'
import ProductCard from './ProductCard'
import LoadMore from '@/components/Core/LoadMore'


function HeroSection() {
  const { loading, category, products, t, meta, loadMore, onLoadMore } = useProducts()
  return (
    <main className='min-h-screen'>
      <div className='min-h-[50svh] isolate relative   flex items-center justify-center after:absolute after:inset-0 after:bg-black after:w-full after:opacity-60 after:h-full' data-scroll='home' >
        <div className="w-full md:w-10/12 lg:w-6/12 mx-auto relative z-10">
          <Image src='/icons/curve.svg' alt='photo' className='absolute left-0 top-0 transition-all duration-200 animate-pulse' />
          <Image src='/icons/curve.svg' alt='photo' className='rotate-180 absolute right-0 bottom-0 transition-all duration-200 animate-pulse' />
          <h1 className="text-center text-[28px] p-2 lg:text-[48px] text-white" >
            {category?.title}
          </h1>
          <p className='text-white text-center text-[18px] text-balance	'>{category?.meta_description}</p>
        </div>
        <Image className='object-cover w-full h-full absolute inset-0 z-[-1] ' src={category?.image} alt="photo" />
      </div>
      <div className="container my-10">
        <h2 className='text-primary text-[30px]'>{t('heading.all_products')}</h2>
        {loading ? <Loader /> : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
            <Each of={products} render={(item) => (
              <ProductCard product={item} />
            )} />
          </div>
        )}

        <div className='my-10 flex justify-center'>
          <LoadMore meta={meta} loading={loadMore} onClick={onLoadMore} />
        </div>
      </div>
    </main>
  )
}

export default HeroSection