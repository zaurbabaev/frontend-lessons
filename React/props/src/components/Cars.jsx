import Card from "./Card"
import { cars } from "../data"

function Cars(){
    return <div className="max-w-285 w-[80%] mx-auto grid grid-cols-4 gap-7">
       {cars.map(({imgUrl, title, price,id})=> <Card
        key={id}
        title={title}
        price={price}
        imgUrl={imgUrl}
        />
       )}
            
    </div>
} 

export default Cars;