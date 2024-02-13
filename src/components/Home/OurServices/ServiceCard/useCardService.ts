import { useEffect, useState } from "react"
import { $http } from '@/api';

export const useCardService = () => {
  const [categories, setCategories] = useState([])


  const fetchCategories = async () => {
    const res = await $http.get({ url: 'categories' })
    console.log(res);
  }

  useEffect(() => {
    fetchCategories()
  }, [])
}