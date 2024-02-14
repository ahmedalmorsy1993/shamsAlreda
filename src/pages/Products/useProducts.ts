import { $http } from "@/api"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { IProduct } from "./types"
import { ICategory } from "@/components/Home/OurServices/ServiceCard/types"
import { IMeta } from "@/components/Core/LoadMore"

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [meta, setMeta] = useState<IMeta>({ current_page: 0, last_page: 0, per_page: 0, count: 0 })
  const [category, setCategory] = useState<ICategory>()
  const [loading, setLoading] = useState<boolean>(true)
  const [loadMore, setLoadMore] = useState<boolean>(true)
  const { t } = useTranslation()

  const params = useParams<{ id: string }>()
  const getProductsByCategory = async () => {
    const res = await $http.get<{ data: { data: IProduct[], meta: IMeta } }>({ url: `products/${params.id}` })
    const { data, meta } = res.data
    const category = data[0]['category']
    setCategory(category)
    const allProducts = [...products, ...data]
    setProducts(allProducts)
    setMeta(meta)
    setLoading(false)
    setLoadMore(false)
  }

  const onLoadMore = () => {
    setLoadMore(true)
    getProductsByCategory()
  }

  useEffect(() => {
    getProductsByCategory()
  }, [])

  return {
    t,
    products,
    category,
    loading,
    meta,
    loadMore,
    onLoadMore
  }
}