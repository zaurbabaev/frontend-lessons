import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import ProductDetails from "./pages/products/ProductDetail";
import Posts from "./pages/posts";
import PostDetail from "./pages/posts/PostDetail";
import NotFound from "./pages/not-found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />

        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostDetail />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
