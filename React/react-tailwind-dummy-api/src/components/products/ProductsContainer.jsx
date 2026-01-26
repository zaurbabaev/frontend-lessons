import { useEffect, useState } from "react";
import { getProducts } from "../../services/dummyService";
import ProductsView from "./ProductsView";

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const res = await getProducts();
        setProducts(res.data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return <ProductsView data={products} loading={loading} />;
}
