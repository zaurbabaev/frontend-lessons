import { fetchUsers } from "@/features/users/usersSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-slate-50 text-black">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-slate-500 font-medium animate-pulse">
          İstifadəçilər yüklənir...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-red-50">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-100 text-center">
          <span className="text-5xl mb-4 block">⚠️</span>
          <h3 className="text-xl font-bold text-red-600">Xəta baş verdi!</h3>
          <p className="text-slate-600 mt-2">{error}</p>
          <button
            onClick={() => dispatch(fetchUsers())}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Yenidən yoxla
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Başlıq Bölməsi */}
        <div className="text-center mb-12 text-black">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            İstifadəçilər Siyahısı
          </h1>
          <p className="text-slate-500 font-medium">
            Sistemdə olan bütün aktiv istifadəçilərin məlumatları
          </p>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {list.map((user) => {
            const initial = user.name?.charAt(0).toUpperCase();

            return (
              <div
                key={user.id}
                onClick={() => navigate(`/users/${user.id}`)}
                className="group cursor-pointer bg-white/70 backdrop-blur-sm border border-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                    {initial}
                  </div>
                  <div className="overflow-hidden">
                    <h2 className="text-lg font-bold text-slate-800 truncate group-hover:text-indigo-600 transition-colors">
                      {user.name}
                    </h2>
                    <p className="text-xs text-indigo-500 font-semibold tracking-wide uppercase">
                      @{user.username}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-slate-600">
                    <span className="text-lg">📧</span>
                    <span className="text-sm truncate">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <span className="text-lg">🏢</span>
                    <span className="text-sm truncate font-medium">
                      {user.company?.name}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                    Profilə bax
                  </span>
                  <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Users;
