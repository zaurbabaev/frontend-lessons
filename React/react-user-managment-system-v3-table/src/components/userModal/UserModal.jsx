import { useEffect, useState } from "react";

export default function UserModal({ onClose, onSave, editingUser }) {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (editingUser) {
      setUsername(editingUser.username);
      setFirstName(editingUser.firstName);
      setLastName(editingUser.lastName);
      setPreview(editingUser.image || null);
    } else {
      setUsername("");
      setFirstName("");
      setLastName("");
      setPreview(null);
    }
  }, [editingUser]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ username, firstName, lastName, image: preview });
    setUsername("");
    setFirstName("");
    setLastName("");
    setPreview(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md animate-[slideIn_0.3s_ease-out] rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-200 hover:rotate-90 hover:bg-slate-200"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="mb-6">
          <h2 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent">
            {editingUser ? "Edit User" : "Add New User"}
          </h2>
          <p className="mt-2 text-slate-600">
            {editingUser
              ? "Update user information"
              : "Fill in the details below"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border-2 border-slate-200 bg-slate-50 p-3 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-lg border-2 border-slate-200 bg-slate-50 p-3 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-lg border-2 border-slate-200 bg-slate-50 p-3 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Profile Picture
            </label>
            <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-4 transition-all duration-200 hover:border-blue-400">
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="h-32 w-32 rounded-full object-cover ring-4 ring-blue-100"
                />
              )}
              <label className="cursor-pointer rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <span className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Choose Image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            {editingUser ? "Update User" : "Create User"}
          </button>
        </form>
      </div>
    </div>
  );
}
