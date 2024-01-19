import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/Default";
import { lazy } from "react";
import { authRoutes } from './authRouts/index';
export const router = createBrowserRouter([
  {
    Component: DefaultLayout,
    children: [
      { index: true, Component: lazy(() => import('../pages/index')) },
    ],

  },
  ...authRoutes,

  { path: '*', Component: lazy(() => import('../pages/NotFound')) },
])
