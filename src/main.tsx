import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.tsx'
import Loader from './components/Loader/index.tsx'
import './bootstrap.ts'
import App from './App.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />} key={location.pathname}>
      <App>
        <RouterProvider router={router} />
      </App>

    </Suspense>
  </React.StrictMode>,
)
