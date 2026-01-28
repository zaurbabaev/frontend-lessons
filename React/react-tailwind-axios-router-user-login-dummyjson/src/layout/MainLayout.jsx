// src/layout/MainLayout.jsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const { state } = useLocation();
  const user = state?.user;

  return (
    <>
      <Header user={user} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
