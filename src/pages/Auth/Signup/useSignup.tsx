import { useAuth } from "@/store/auth"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
  const authStore = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { t } = useTranslation()
  const defaultValues = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  }
  const onSubmit = async (formData: typeof defaultValues) => {
    try {
      setLoading(true)
      await authStore.signup(formData)
      navigate('/login')
    } finally {
      setLoading(false)
    }
  }

  const passwordIcon = !showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'
  const inputType = !showPassword ? 'password' : 'text'

  useEffect(() => {
    if (authStore.token) navigate('/')
  }, [authStore.token])
  return {
    passwordIcon,
    inputType,
    onSubmit,
    t,
    loading,
    setShowPassword,
    defaultValues,
    showPassword
  }

}