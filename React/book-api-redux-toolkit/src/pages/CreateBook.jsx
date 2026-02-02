import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../features/books/booksSlice";

export default function CreateBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await dispatch(addBook({ title, author }));
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Create Book</h1>

      <form onSubmit={submit} className="space-y-3">
        <input
          className="border w-full p-2"
          placeholder="Title"
          value={title}
          s
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          className="border w-full p-2"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="bg-green-600 text-white w-full py-2">Create</button>
      </form>
    </div>
  );
}
