import { useEffect, useState } from "react";
import { $http } from "@/api"
import { Product } from "../model";

export default function useProduct() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const getProductList = async () => {
    const { data } = await $http.get({ url: '/products' })
    const productsList: Product[] = data.map(((el: Product, index: number) => ({
      ...el,
      bestSeller: index % 2 == 0 ? true : false
    })))
    setProducts(productsList)
    setLoading(false)
  }

  useEffect(() => {
    getProductList()
  }, [])
  return {
    products,
    loading
  }
}
