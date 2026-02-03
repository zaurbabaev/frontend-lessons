import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
      <div className="flex justify-center items-center h-screen">
        <p className="animate-pulse text-xl text-gray-700">Yüklənir...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{user.name}</h2>

        <div className="space-y-2 text-gray-700">
          <p>
            <b>Username:</b> {user.username}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Company:</b> {user.company?.name}
          </p>
        </div>

        <button
          onClick={() => navigate("/users")}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Geri qayıt
        </button>
      </div>
    </div>
  );
}
