import { useEffect, useState } from "react";
import { getUsers } from "../../services/dummyService";
import UsersView from "./UsersView";

export default function UsersContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const res = await getUsers();
        setUsers(res.data.users);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return <UsersView data={users} loading={loading} />;
}
