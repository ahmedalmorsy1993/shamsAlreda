import { Outlet, useLocation } from "react-router-dom";
import AnimatedLayout from "./AnimatedLayout";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function AuthLayout() {

  const location = useLocation()
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])
  return (
    <>

      <AnimatedLayout>
        <Outlet key={location.pathname} />
      </AnimatedLayout>
      <Footer />
    </>

  )
}
