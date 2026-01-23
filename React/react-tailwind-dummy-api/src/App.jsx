import { useState } from "react";
import Products from "./components/products";
import Users from "./components/users";
import Carts from "./components/carts";

export default function App() {
  const [tab, setTab] = useState("products");

  const tabs = [
    {
      id: "products",
      label: "Məhsullar",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      color: "purple",
    },
    {
      id: "users",
      label: "İstifadəçilər",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      color: "emerald",
    },
    {
      id: "carts",
      label: "Səbətlər",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      color: "blue",
    },
  ];

  const getColorClasses = (color, isActive) => {
    const colors = {
      purple: isActive
        ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/50"
        : "text-purple-600 hover:bg-purple-50",
      emerald: isActive
        ? "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg shadow-emerald-500/50"
        : "text-emerald-600 hover:bg-emerald-50",
      blue: isActive
        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/50"
        : "text-blue-600 hover:bg-blue-50",
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-3xl font-bold text-transparent">
                Admin Panel
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Məhsulları, istifadəçiləri və səbətləri idarə edin
              </p>
            </div>

            {/* User Avatar */}
            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold text-gray-700">Admin</p>
                <p className="text-xs text-gray-500">admin@example.com</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-blue-500 font-bold text-white shadow-lg">
                A
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-wrap gap-3 rounded-2xl bg-white p-2 shadow-lg">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex min-w-35 flex-1 items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${getColorClasses(
                t.color,
                tab === t.id,
              )} ${tab !== t.id && "border-2 border-transparent hover:border-gray-200"}`}
            >
              <span
                className={`transition-transform duration-300 ${tab === t.id ? "scale-110" : ""}`}
              >
                {t.icon}
              </span>
              <span className="text-sm sm:text-base">{t.label}</span>

              {tab === t.id && (
                <span className="ml-2 h-2 w-2 animate-pulse rounded-full bg-white"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="mx-auto max-w-7xl px-6 pb-10">
        <div className="animate-fadeIn">
          {tab === "products" && <Products />}
          {tab === "users" && <Users />}
          {tab === "carts" && <Carts />}
        </div>
      </div>

      {/* Add fadeIn animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
