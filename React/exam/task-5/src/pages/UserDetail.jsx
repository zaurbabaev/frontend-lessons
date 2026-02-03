import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { fetchUserById } from "@/features/users/usersSlice";

export default function UserDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedUser: user, loadingUser } = useSelector(
    (state) => state.users,
  );

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  if (loadingUser || !user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-slate-500 font-medium animate-pulse">
          Məlumatlar gətirilir...
        </p>
      </div>
    );
  }

  // İstifadəçinin baş hərfini götürürük
  const initial = user.name?.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Naviqasiya */}
        <button
          onClick={() => navigate("/users")}
          className="group mb-8 flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-all duration-300 font-medium">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
            ←
          </span>
          Siyahıya qayıt
        </button>

        {/* Ana Kart */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl shadow-indigo-100 overflow-hidden border border-white">
          {/* Üst Header Bölməsi */}
          <div className="h-32 bg-linear-to-r from-indigo-600 to-purple-600 relative">
            <div className="absolute -bottom-12 left-8">
              <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-xl">
                <div className="w-full h-full rounded-xl bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-3xl font-bold text-white">
                  {initial}
                </div>
              </div>
            </div>
          </div>

          {/* Ad və İstifadəçi Adı */}
          <div className="pt-16 pb-8 px-8">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {user.name}
            </h1>
            <p className="text-indigo-600 font-medium flex items-center gap-1">
              @{user.username}
            </p>
          </div>

          <hr className="border-slate-100 mx-8" />

          {/* Məlumat Grid-i */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Əlaqə Məlumatları */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Əlaqə Məlumatları
              </h3>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  📧
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">
                    Email Adresi
                  </p>
                  <p className="text-slate-700 font-semibold">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  📞
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Telefon</p>
                  <p className="text-slate-700 font-semibold">
                    {user.phone || "+994 00 000 00 00"}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Peşəkar Məlumatlar
              </h3>

              <div className="flex items-center gap-4 group text-black">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  🏢
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Şirkət</p>
                  <p className="text-slate-700 font-semibold">
                    {user.company?.name}
                  </p>
                  <p className="text-xs text-slate-500 italic">
                    {user.company?.catchPhrase}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group text-black">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  🌐
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Vebsayt</p>
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    className="text-indigo-600 font-semibold hover:underline">
                    {user.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Alt Bölmə (Opsional) */}
          <div className="bg-slate-50 px-8 py-4 flex justify-between items-center border-t border-slate-100">
            <span className="text-xs text-slate-400 font-medium uppercase">
              ID: {user.id}
            </span>
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-slate-500 font-medium">
                Aktiv İstifadəçi
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
