import {
  addRewiew as addReview,
  fetchBookById,
} from "@/features/books/booksSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.selected);

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, [id]);

  const submitReview = () => {
    dispatch(addReview({ id, review: { rating, comment } }));
    setComment("");
  };

  if (!book) return null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p>{book.author}</p>
      <h3 className="mt-4 font-semibold">Reviews</h3>
      {book.reviews?.map((r, i) => (
        <p key={i}>
          ⭐ {r.rating} - {r.comment}
        </p>
      ))}
      <div className="mt-4 space-x-2">
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border p-1 w-20"
        />
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border p-1"
          placeholder=">Şərh"
        />
        <button
          onClick={submitReview}
          className="bg-blue-600 text-white px-3 py-1">
          Göndər
        </button>
      </div>
    </div>
  );
}
