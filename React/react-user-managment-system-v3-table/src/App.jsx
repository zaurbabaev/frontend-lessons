import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import UserTable from "./components/userTable/UserTable";
import UserModal from "./components/userModal/UserModal";

export default function App() {
  const [users, setUsers] = useState([]);

  const [editingUser, setEditingUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSave = (user) => {
    setUsers((prev) => {
      if (editingUser) {
        return prev.map((u) =>
          u.id === editingUser.id ? { ...user, id: u.id } : u,
        );
      }

      const ids = prev.map((u) => u.id).filter(Boolean);
      const newId = ids.length ? Math.max(...ids) + 1 : 1;

      return [...prev, { ...user, id: newId }];
    });

    setEditingUser(null);
    setModalOpen(false);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm("Bu istifadəçini silməyə əminsinizmi?")) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header
          onAdd={() => {
            setEditingUser(null);
            setModalOpen(true);
          }}
        />

        <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />

        {modalOpen && (
          <UserModal
            onClose={() => {
              setModalOpen(false);
              setEditingUser(null);
            }}
            onSave={handleSave}
            editingUser={editingUser}
          />
        )}
      </main>
    </div>
  );
}
