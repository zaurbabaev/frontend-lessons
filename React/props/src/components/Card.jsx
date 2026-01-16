export default function Card({imgUrl, title }){
    return <div className="shadow-md rounded-lg p-7.5">
    <img src={imgUrl} alt="" />
    <p>{title}</p>
    </div>
}
