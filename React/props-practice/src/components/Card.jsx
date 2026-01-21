export default function Card({ img, dsc, name, price, country }) {
  return (
    <div className="shadow-md rounded-lg p-7.5">
      <img src={img} alt="" />
      <p>{dsc}</p>
      <p>{name}</p>
      <p>{price}</p>
      <p>{country}</p>
    </div>
  );
}
