import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/Default";
import { lazy } from "react";
export const router = createBrowserRouter([
  {
    Component: DefaultLayout,
    children: [
      { index: true, Component: lazy(() => import('@/pages/index')) },
      { path: '/products/:id', Component: lazy(() => import('@/pages/Products')) },
      { path: '/about-us', Component: lazy(() => import('@/pages/AboutUs')) },
    ],

  },

  { path: '*', Component: lazy(() => import('../pages/NotFound')) },
])
