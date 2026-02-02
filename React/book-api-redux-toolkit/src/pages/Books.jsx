import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../features/books/booksSlice";
import { Link } from "react-router-dom";

export default function Books() {
  const dispatch = useDispatch();
  const { list = [], loading, error } = useSelector((state) => state.books);
  const [rating, setRating] = useState("");

  useEffect(() => {
    dispatch(fetchBooks(rating));
  }, [dispatch, rating]);

  if (loading)
    return <p className="p-4 font-semibold text-green-500">Yüklənir...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="p-6">
      <select
        className="border p-2 mb-4"
        value={rating}
        onChange={(e) => setRating(e.target.value)}>
        <option value="">All</option>
        <option value="3">Rating 3+</option>
        <option value="4">Rating 4+</option>
      </select>

      <div className="grid md:grid-cols-3 gap-4">
        {Array.isArray(list) &&
          list.map((b) => (
            <Link
              key={b._id}
              to={`/books/${b._id}`}
              className="border p-4 hover:shadow">
              <h2 className="font-bold">{b.title}</h2>
              <p>{b.author}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
