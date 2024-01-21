import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Zza_Project from '../src/package/zza_project/index.jsx'
import Lsj_Project from '../src/package/lsj_project/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/zza-project',
    element: <Zza_Project />,
  },
  {
    path: '/lsj-project',
    element: <Lsj_Project />,
  },
  // {
  //   path: '*',
  //   element:
  // },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
)
