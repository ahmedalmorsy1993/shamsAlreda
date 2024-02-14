import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import AnimatedLayout from "./AnimatedLayout";
import TopBar from "@/components/TopBar";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Notification from "@/components/Notification";

export default function DefaultLayout() {
  const { i18n } = useTranslation()
  document.documentElement.lang = i18n.language
  document.documentElement.dir = i18n.dir(i18n.language)
  const location = useLocation()
  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])
  return (
    <>
      <Notification />
      <TopBar />
      <NavBar />
      <AnimatedLayout>
        <Outlet key={location.pathname} />
      </AnimatedLayout>
      <Footer />
    </>

  )
}
