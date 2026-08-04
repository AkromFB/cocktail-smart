import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AddPanel from './AddPanel.jsx'
import Learn from './Learn.jsx'

const router = createHashRouter([
  {path:"/",
    element:<App></App>
  },
  {path:"add",
    element:<AddPanel></AddPanel>
  },
  {path:"learn",
    element:<Learn></Learn>
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
