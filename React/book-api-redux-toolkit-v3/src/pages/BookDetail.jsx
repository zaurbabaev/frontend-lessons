import {
  addRewiew as addReview,
  fetchBookById,
} from "@/features/books/booksSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.selected);

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, [id, dispatch]);

  const submitReview = async (e) => {
    e.preventDefault();
    if (comment.trim()) {
      await dispatch(
        addReview({ id, review: { rating: Number(rating), comment } }),
      );
      setComment("");
      setRating(5);
      // Reyting əlavə etdikdə ekran yenilənir
      dispatch(fetchBookById(id));
    }
  };

  // Reytingin orta dəyərini tapır
  const getAverageRating = () => {
    if (book.averageRating && book.averageRating > 0) {
      return book.averageRating.toFixed(1);
    }
    if (book.reviews && book.reviews.length > 0) {
      const sum = book.reviews.reduce((acc, r) => acc + r.rating, 0);
      return (sum / book.reviews.length).toFixed(1);
    }
    return "Yoxdur";
  };

  if (!book)
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
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-6 font-medium transition-colors">
          <span>←</span> Geri
        </Link>

        {/* Book Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-purple-100">
          <div className="flex items-start gap-6">
            <div className="bg-linear-to-br from-purple-100 to-pink-100 p-6 rounded-2xl">
              <span className="text-6xl">📚</span>
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-3">
                {book.title}
              </h1>
              <p className="text-xl text-gray-600 flex items-center gap-2 mb-4">
                <span>✍️</span>
                <span className="font-medium">{book.author}</span>
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full border-2 border-yellow-200">
                  <span className="text-yellow-500 text-xl">⭐</span>
                  <span className="font-bold text-lg text-gray-700">
                    {getAverageRating()}
                  </span>
                </div>

                <div className="text-gray-600">
                  <span className="font-semibold">
                    {book.reviews?.length || 0}
                  </span>{" "}
                  rəy
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-purple-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>💬</span> Rəylər
          </h3>

          {/* Add Review Form */}
          <div className="mb-8 pb-6 border-b-2 border-purple-100">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Öz rəyinizi əlavə edin
            </h4>

            <form onSubmit={submitReview} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reytinq
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="flex-1 h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                  <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200 min-w-[80px] justify-center">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-bold text-gray-700">{rating}</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Şərh
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full border-2 border-purple-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Kitab haqqında fikirlərinizi yazın..."
                  rows="4"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!comment.trim()}
                className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                Rəyi Göndər
              </button>
            </form>
          </div>

          {book.reviews && book.reviews.length > 0 ?
            <div className="space-y-4">
              {book.reviews.map((r, i) => (
                <div
                  key={i}
                  className="bg-linear-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={
                          index < r.rating ? "text-yellow-500" : "text-gray-300"
                        }>
                        ⭐
                      </span>
                    ))}
                    <span className="text-sm text-gray-500 ml-2">
                      ({r.rating}/5)
                    </span>
                  </div>
                  <p className="text-gray-700">{r.comment}</p>
                </div>
              ))}
            </div>
          : <div className="text-center py-8">
              <span className="text-5xl mb-3 block">💭</span>
              <p className="text-gray-500">
                Hələ heç bir rəy yoxdur. İlk rəyi siz yazın!
              </p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
