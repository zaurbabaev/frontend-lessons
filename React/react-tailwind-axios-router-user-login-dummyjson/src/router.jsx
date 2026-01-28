// src/router/index.jsx
import MainLayout from "@/layout/MainLayout";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRouter from "@/routers/ProtectedRoute";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" replace /> },
      { path: "/login", element: <Login /> },
      {
        element: <ProtectedRouter />,
        children: [{ path: "/dashboard", element: <Dashboard /> }],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
