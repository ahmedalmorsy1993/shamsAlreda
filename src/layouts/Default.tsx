import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import AnimatedLayout from "./AnimatedLayout";

export default function DefaultLayout() {
  return (
    <div>
      <NavBar />
      <AnimatedLayout>
        <Outlet key={location.pathname} />
      </AnimatedLayout>

    </div>

  )
}
