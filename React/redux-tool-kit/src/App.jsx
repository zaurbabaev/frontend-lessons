import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, removeFromListAction } from "./features/cart.slice";

function App() {
  const [products, setProducts] = useState([]);
  const { list: cartList } = useSelector((state) => state.cartList);
  const dispatch = useDispatch();
  console.log(cartList);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://dummyjson.com/products");
      setProducts(data.products);
    })();
  }, []);
  return (
    <div className="grid grid-cols-2 gap-7">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className="flex items-center gap-7 mb-4">
              <img src={product.thumbnail} className="w-10 h-10" />
              <span>{product.title}</span>
              <button
                className="bg-blue-800 text-white p-3"
                onClick={() => dispatch(addToCartAction(product))}>
                Add to cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        {cartList.map((product) => (
          <li key={product.id}>
            <div className="flex items-center gap-8 mb-4">
              <img src={product.thumbnail} className="w-10 h-10" />
              <span>
                {product.title} Count: {product.count}
              </span>
              <button
                className="bg-blue-800 text-white p-3"
                onClick={() => dispatch(removeFromListAction(product.id))}>
                Remove x
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
