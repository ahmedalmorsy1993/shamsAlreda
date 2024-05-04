import DefaultLayout from '@/layouts/Default';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const mainRoutes: RouteObject[] = [
  {
    Component: DefaultLayout,
    children: [
      { index: true, Component: lazy(() => import('@/pages/index')) },
      { path: "/cart", Component: lazy(() => import('@/pages/Cart')) },
      { path: "/orders", Component: lazy(() => import('@/pages/Orders')) },
    ],

  },

  { path: '*', Component: lazy(() => import('../pages/NotFound')) },
]
