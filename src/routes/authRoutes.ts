import AuthLayout from '@/layouts/Auth';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const authRoutes: RouteObject[] = [
  {
    Component: AuthLayout,
    children: [
      { path: "/login", Component: lazy(() => import('@/pages/Auth/Login')) },
      { path: "/signup", Component: lazy(() => import('@/pages/Auth/Signup')) },
    ],

  },

]
