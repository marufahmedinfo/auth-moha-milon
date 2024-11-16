import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './components/Root';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import AuthProvider from './Provider/AuthProvider';
import Order from './components/Order';
import PrivetRoutes from './routes/PrivetRoutes';
import Profile from './Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/order',
        element: <PrivetRoutes><Order /></PrivetRoutes>
      },
      {
        path: '/profile',
        element:<PrivetRoutes><Profile /></PrivetRoutes>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
