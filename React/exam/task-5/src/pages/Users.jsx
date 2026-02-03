import { fetchUsers } from "@/features/users/usersSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Yüklənir...
      </div>
    );
  }
  if (error) return <p className="text-red-500">Xəta: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Users</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((user) => (
          <div
            className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            key={user.id}
            onClick={() => navigate(`/users/${user.id}`)}>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600 mt-2">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
