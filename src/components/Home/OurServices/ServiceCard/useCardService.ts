import { useEffect, useState } from "react"
import { $http } from '@/api';
import { ICategory } from "./types";
import { useTranslation } from "react-i18next";

export const useCardService = () => {
  const [categories, setCategories] = useState<ICategory[]>([])
  const { i18n } = useTranslation()


  const fetchCategories = async () => {
    const res = await $http.get<{ data: { data: ICategory[] } }>({ url: 'categories' })
    const { data } = res.data
      ;
    setCategories(data)
  }

  useEffect(() => {
    fetchCategories()
  }, [i18n.language])

  return {
    categories
  }
}