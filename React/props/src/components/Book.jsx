export default function Book(props){
    return <div className="shadow-md rounded-lg p-7.5">
        <img src={props.bookImage} alt="" />
        <p>{props.bookName}</p>
    </div>
}
