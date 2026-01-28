// src/routers/ProtectedRoute.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRouter() {
  const { state } = useLocation();
  const user = state?.user;
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
