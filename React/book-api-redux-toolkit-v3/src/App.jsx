import { Route, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Books from "@/pages/Books";
import BookDetail from "@/pages/BookDetail";
import CreateBook from "@/pages/CreateBook";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="top-right\" reverseOrder={false} />
      <Routes>
        <Route>
          <Route path="/" element={<Books />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/create" element={<CreateBook />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
