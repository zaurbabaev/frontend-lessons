// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "@/services/authService";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const userData = await loginRequest(username, password);
      navigate("/dashboard", { state: { user: userData } });
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-500 via-indigo-600 to-purple-600">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute top-40 -right-20 h-96 w-96 animate-pulse rounded-full bg-white opacity-10 blur-3xl delay-1000"></div>
        <div className="absolute -bottom-20 left-1/2 h-72 w-72 animate-pulse rounded-full bg-white opacity-10 blur-3xl delay-500"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 mx-4 w-full max-w-md">
        <div className="overflow-hidden rounded-2xl bg-white/95 shadow-2xl backdrop-blur-sm">
          {/* Header */}
          <div className="bg-linear-to-r from-indigo-600 to-purple-600 p-8 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
              <span className="text-4xl">🔐</span>
            </div>
            <h2 className="mb-2 text-3xl font-bold text-white">
              Xoş Gəlmisiniz
            </h2>
            <p className="text-indigo-100">Hesabınıza daxil olun</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 p-8">
            {/* Error Message */}
            {error && (
              <div className="animate-shake rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4">
                <div className="flex items-center">
                  <span className="mr-2 text-red-500">⚠️</span>
                  <p className="text-sm font-medium text-red-700">{error}</p>
                </div>
              </div>
            )}

            {/* Username Input */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                İstifadəçi adı
              </label>
              <div className="relative">
                <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
                  👤
                </span>
                <input
                  type="text"
                  placeholder="İstifadəçi adınızı daxil edin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-lg border-2 border-gray-200 py-3 pr-4 pl-12 transition-all duration-200 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Şifrə
              </label>
              <div className="relative">
                <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
                  🔒
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Şifrənizi daxil edin"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border-2 border-gray-200 py-3 pr-12 pl-12 transition-all duration-200 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full transform rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="mr-3 h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Daxil olunur...
                </span>
              ) : (
                "Daxil ol"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
