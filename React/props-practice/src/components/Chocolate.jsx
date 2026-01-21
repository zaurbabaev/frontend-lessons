import { chocolates } from "../data";
import Card from "./Card";

export default function Chocolates() {
  return (
    <div className="max-w-275 w-[80%] mx-auto grid grid-cols-4 gap-7 py-5">
      {chocolates.map(({ id, dsc, price, name, country, img }) => (
        <Card key={id} dsc={dsc} price={price} name={name} country={country} img={img}  />
      ))}
    </div>
  );
}
