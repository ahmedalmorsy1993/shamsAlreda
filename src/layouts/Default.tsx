import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import AnimatedLayout from "./AnimatedLayout";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function DefaultLayout() {

  const location = useLocation()
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])
  return (
    <>
      <NavBar />
      <AnimatedLayout>
        <Outlet key={location.pathname} />
      </AnimatedLayout>
      <Footer />
    </>

  )
}
