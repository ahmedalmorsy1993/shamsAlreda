import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.tsx'
import Loader from './components/Loader/index.tsx'
import './bootstrap.ts'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />} key={location.pathname}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
