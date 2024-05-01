import { $http } from '@/api';
import { useEffect, useState } from 'react';
import { IProduct } from './types';
import { IMeta } from '@/components/Core/LoadMore';

export const useCard = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [meta, setMeta] = useState<IMeta>({ last_page: 0, current_page: 0, per_page: 0, count: 0 })
  const [loading, setLoading] = useState<boolean>(false)
  const getProducts = async () => {
    setLoading(true)
    const res = await $http.get<{ data: { data: IProduct[], meta: IMeta } }>({ url: 'products' })
    const { data, meta } = res.data
    const allProducts = [...products, ...data]
    setProducts(allProducts)
    setMeta(meta)
    setLoading(false)

  }

  const onLoadMore = () => {
    getProducts()
  }

  useEffect(() => {
    getProducts()
  }, [])



  return {
    products,
    meta,
    loading,
    onLoadMore
  }
}