import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import CreateBook from "./pages/CreateBook";

function App() {
  return (
    <>
      <Navbar />
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
