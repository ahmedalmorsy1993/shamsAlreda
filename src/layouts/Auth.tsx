import { Navigate, Outlet } from "react-router-dom";
import AnimatedLayout from "./AnimatedLayout";
import { useAuthStore } from "@/store/auth";

export default function AuthLayout() {
  const authStore = useAuthStore()
  if (authStore.token) {
    return Navigate({ to: '/' })
  }
  return (
    <div>
      <AnimatedLayout>
        <Outlet key={location.pathname} />
      </AnimatedLayout>

    </div>

  )
}
