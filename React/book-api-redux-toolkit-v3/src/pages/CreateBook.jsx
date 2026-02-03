import { addBook } from "../features/books/booksSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

export default function CreateBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(addBook({ title, author }));
    setLoading(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Geri qayıtmaq  buttonu */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-6 font-medium transition-colors"
        >
          <span>←</span> Geri
        </Link>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-purple-100">
          <div className="text-center mb-8">
            <div className="bg-linear-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-5xl">📚</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Yeni Kitab Əlavə Et</h1>
            <p className="text-gray-600">Kitabxananızı genişləndirin</p>
          </div>

          <form onSubmit={submit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📖 Kitabın Adı
              </label>
              <input
                className="w-full border-2 border-purple-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Məsələn: Qürur və Qərəz"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ✍️ Müəllif
              </label>
              <input
                className="w-full border-2 border-purple-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Məsələn: Jane Austen"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Əlavə edilir...</span>
                </>
              ) : (
                <>
                  <span className="text-xl">+</span>
                  <span>Kitabı Əlavə Et</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
            <p className="text-sm text-gray-600 text-center">
              💡 <span className="font-medium">Məsləhət:</span> Dəqiq məlumatlar daxil edin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}