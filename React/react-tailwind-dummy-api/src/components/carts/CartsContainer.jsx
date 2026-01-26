import { useEffect, useState } from "react";
import { getCarts } from "../../services/dummyService";
import CartsView from "./CartsView";

export default function CartsContainer() {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCarts = async () => {
      try {
        setLoading(true);
        const res = await getCarts();
        setCarts(res.data.carts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadCarts();
  }, []);

  return <CartsView data={carts} loading={loading} />;
}
