import { lazy } from "react";
import AuthLayout from "@/layouts/Auth";
import { RouteObject } from "react-router-dom";

export const authRoutes: RouteObject[] = [
  {
    Component: AuthLayout,
    children: [
      { path: '/login', Component: lazy(() => import('@/pages/login')) },
    ]
  },
]