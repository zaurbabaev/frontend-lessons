import { useEffect, useState } from "react";
import { getProducts } from "../services/dummyService";
import ProductsView from "./ProductsView";

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => setProducts(res.data.products))
      .finally(() => setLoading(false));
  }, []);

  return <ProductsView data={products} loading={loading} />;
}
