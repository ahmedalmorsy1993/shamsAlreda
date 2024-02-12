import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import AnimatedLayout from "./AnimatedLayout";
import TopBar from "@/components/TopBar";
import { useTranslation } from "react-i18next";

export default function DefaultLayout() {
  const { i18n } = useTranslation()
  document.documentElement.lang = i18n.language
  document.documentElement.dir = i18n.dir(i18n.language)


  return (
    <>
      <TopBar />
      <NavBar />
      <AnimatedLayout>
        <Outlet key={location.pathname} />
      </AnimatedLayout>

    </>

  )
}
