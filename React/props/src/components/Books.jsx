import Book from "./Book";

function Books(){
    return <div className="max-w-275 w-[80%] mx-auto grid grid-cols-4 gap-7 py-5">
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </div>

}

export default Books;