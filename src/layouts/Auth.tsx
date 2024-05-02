import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AnimatedLayout from "./AnimatedLayout";
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import { useAuth } from "@/store/auth";

export default function AuthLayout() {
  const { token } = useAuth()

  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])
  return (
    <>
      <NavBar />
      <AnimatedLayout>
        <Outlet key={location.pathname} />
      </AnimatedLayout>
    </>

  )
}
