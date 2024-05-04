import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import AnimatedLayout from "./AnimatedLayout";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useAuth } from "@/store/auth";

export default function DefaultLayout() {
  const authStore = useAuth()
  const location = useLocation()
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    if (authStore.token) {
      // this mean this use is loggedIn
      authStore.profile()
    }
  }, [authStore.token])
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
