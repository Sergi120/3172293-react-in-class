import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboardLayout} from "@/shared";
import UserListPage from "../features/users/pages/UserListPage";
import { UserRegisterForm } from "../features/users";
import HomePage from "../features/home/components/pages/HomePage";
import { Login } from "../features/auth";
import ProtectedRoute from "../shared/components/auth/ProtectedRoute";
import AccessPage from "../features/access/pages/AccessPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    // el layout pone el fondo y adentro (en el Outlet) se muestra el login
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      //  {path: "login", element: <Login/>}
    ],
  },
  {
    path: "/dashboard",
    // si no hay token no deja entrar al dashboard y manda al login
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true },
      // {path: "/dashboard/auth", element: <h1>Hello2</h1>},
      { path: "userList", element: <UserListPage /> },
      { path: "userCreate", element: <UserRegisterForm /> },
      // pagina de permisos dentro del dashboard para que tenga el navbar
      { path: "access", element: <AccessPage /> },
    ],
  },

  {
    path: "/home",
    element: <HomePage />,
    children: [
      { index: true },
      // {path: "/dashboard/auth", element: <h1>Hello2</h1>},
      // {path: "userList", element: <UserListPage/>},
      // {path: "userCreate", element: <UserRegisterForm/>},
    ],
  },

]);

export default router;