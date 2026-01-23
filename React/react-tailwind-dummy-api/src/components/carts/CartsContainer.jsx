import { useEffect, useState } from "react";
import { getCarts } from "../services/dummyService";
import CartsView from "./CartsView";

export default function CartsContainer() {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCarts()
      .then((res) => setCarts(res.data.carts))
      .finally(setLoading(false));
  }, []);

  return <CartsView data={carts} loading={loading} />;
}
