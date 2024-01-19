import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import AnimatedLayout from "./AnimatedLayout";
import { useAuthStore } from "@/store/auth";

export default function DefaultLayout() {
  const authStore = useAuthStore()
  if (!authStore.token) {
    return Navigate({ to: '/login' })
  }
  return (
    <div>
      <NavBar />
      <AnimatedLayout>
        <Outlet key={location.pathname} />
      </AnimatedLayout>

    </div>

  )
}
