import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { mainRoutes } from "./mainRoutes";
import { authRoutes } from "./authRoutes";
export const router = createBrowserRouter([
  ...mainRoutes,
  ...authRoutes,
  { path: '*', Component: lazy(() => import('../pages/NotFound')) },
])
