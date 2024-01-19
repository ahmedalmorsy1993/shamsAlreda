
import { useAuthStore } from '@/store/auth';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
export default function useLogin() {
  const authStore = useAuthStore(state => state)
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const defaultValues = {
    password: "",
    email: ""
  }
  const passwordIcon = showPassword ? 'fa-solid fa-eye' : 'fa-sharp fa-solid fa-eye-slash'
  const handleLogin = (data: any) => {
    authStore.login(data).then(() => {
      navigate('/')
    })
  }
  const togglePasswordViability = () => {
    setShowPassword(!showPassword)
  }
  return { handleLogin, defaultValues, loading: authStore.loading, passwordIcon, showPassword, togglePasswordViability }

}
