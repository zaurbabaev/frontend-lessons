import { books } from "../data"
import Card from "./Card";


function Books(){
    return <div className="max-w-275 w-[80%] mx-auto grid grid-cols-4 gap-7 py-5">
      
       {books.map((book)=>{
        return <Card 
        key={book.id}
        title={book.title}
        price={book.price}
        imgUrl={book.imgUrl}
        />
       })} 
    </div>
}

export default Books;