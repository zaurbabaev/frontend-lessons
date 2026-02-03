import { fetchBooks } from "@/features/books/booksSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Books() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.books);
  const [rating, setRating] = useState("");

  useEffect(() => {
    dispatch(fetchBooks(rating));
  }, [dispatch, rating]);

  // Calculate average rating
  const getAverageRating = (book) => {
    if (book.averageRating && book.averageRating > 0) {
      return book.averageRating.toFixed(1);
    }
    if (book.reviews && book.reviews.length > 0) {
      const sum = book.reviews.reduce((acc, r) => acc + r.rating, 0);
      return (sum / book.reviews.length).toFixed(1);
    }
    return "Yoxdur";
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-700 font-medium">Yüklənir...</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              📚 Kitab Kolleksiyası
            </h1>
            <p className="text-gray-600">Ən sevdiyiniz kitabları kəşf edin</p>
          </div>

          <div className="flex gap-4 items-center">
            <select
              className="border-2 border-purple-300 bg-white p-3 rounded-xl shadow-md hover:border-purple-500 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={rating}
              onChange={(e) => setRating(e.target.value)}>
              <option value="">🌟 Bütün reytinqlər</option>
              <option value="3">⭐ 3+ reytinq</option>
              <option value="4">⭐ 4+ reytinq</option>
            </select>

            <Link
              to="/create"
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all font-semibold flex items-center gap-2">
              <span className="text-xl">+</span> Yeni Kitab
            </Link>
          </div>
        </div>

        {/* Books Grid */}
        {list.length === 0 ?
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📖</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Heç bir kitab tapılmadı
            </h3>
            <p className="text-gray-500">İlk kitabınızı əlavə edin!</p>
          </div>
        : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((b) => (
              <Link key={b._id} to={`/books/${b._id}`} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-purple-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-linear-to-br from-purple-100 to-pink-100 p-3 rounded-xl">
                      <span className="text-3xl">📚</span>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">
                      <span className="text-yellow-500">⭐</span>
                      <span className="font-semibold text-gray-700">
                        {getAverageRating(b)}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {b.title}
                  </h2>

                  <p className="text-gray-600 flex items-center gap-2 mb-3">
                    <span>✍️</span>
                    <span className="font-medium">{b.author}</span>
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
                    <span>💬</span>
                    <span>{b.reviews?.length || 0} rəy</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        }
      </div>
    </div>
  );
}
