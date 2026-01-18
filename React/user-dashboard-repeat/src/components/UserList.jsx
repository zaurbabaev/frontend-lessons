import { users } from "../datas/data";
import UserCard from "./UserCard";

export default function UserList() {
  return (
    <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {users.map(({ id, ...user }) => (
        <UserCard key={id} user={user} />
      ))}
    </div>
  );
}
