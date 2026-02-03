import { fetchBooks, removeBook } from "@/features/books/booksSlice";
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

  const onDelete = (id) => {
    if (confirm("Bu kitab silinsin?")) dispatch(removeBook(id));
  };

  if (loading) return <p className="p-6">Yüklənir...</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <select
          className="border p-2 rounded"
          value={rating}
          onChange={(e) => setRating(e.target.value)}>
          <option value="">All</option>
          <option value="3">Rating 3+</option>
          <option value="4">Rating 4+</option>
        </select>
        <Link
          to="/create"
          className="bg-green-600 text-white px-4 py-2 rounded">
          + New Book
        </Link>
      </div>
      <div className="grid mg:grid-cols-3 gap-4">
        {list.map((b) => (
          <div
            key={b._id}
            className="border rounded p-4 hover:shower transition">
            <Link to={`/books/${b._id}`}>
              <h2 className="font-bold text-lg">{b.title}</h2>
              <p className="text-sm text-gray-600">{b.author}</p>
              <p className="text-sm mt-1">⭐ {b.averageRating}</p>
            </Link>
            <div className="flex justify-end gap-2 mt-4">
              <Link
                to={`/books/${b._id}/edit`}
                className="px-3 py-1 border rounded text-blue-600">
                Edit
              </Link>
              <button
                onClick={() => onDelete(b._id)}
                className="px-3 py-1 border rounded text-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
