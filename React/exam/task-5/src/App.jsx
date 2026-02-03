import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Users from "@/pages/Users";
import UserDetail from "@/pages/UserDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="users" />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetail />} />
    </Routes>
  );
}

export default App;
