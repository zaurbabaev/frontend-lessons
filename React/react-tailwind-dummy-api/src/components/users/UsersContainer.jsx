import { useEffect, useState } from "react";
import { getUsers } from "../services/dummyService";
import UsersView from "./UsersView";

export default function UsersContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((res) => setUsers(res.data.users))
      .finally(setLoading(false));
  }, []);

  return <UsersView data={users} loading={loading} />;
}
