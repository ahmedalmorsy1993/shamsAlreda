import { Outlet } from "react-router-dom";
import AnimatedLayout from "./AnimatedLayout";

export default function AuthLayout() {
  return (
    <div>
      <AnimatedLayout>
        <Outlet key={location.pathname} />
      </AnimatedLayout>

    </div>

  )
}
