import { useEffect, useState } from "react"
import { $http } from '@/api';
import { ICategory } from "./types";

export const useCardService = () => {
  const [categories, setCategories] = useState<ICategory[]>([])


  const fetchCategories = async () => {
    const res = await $http.get<{ data: { data: ICategory[] } }>({ url: 'categories' })
    const { data } = res.data
    console.log(data);
    setCategories(data)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return {
    categories
  }
}