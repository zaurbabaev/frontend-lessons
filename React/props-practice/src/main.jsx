import { createRoot } from "react-dom/client";
import "./index.css";
import Chocolates from "./components/Chocolate";

createRoot(document.getElementById("root")).render(
  <>
    <Chocolates />
  </>
);
