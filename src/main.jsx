import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './components/Register.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'register',
        element: <Register />
      },
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
  
)
