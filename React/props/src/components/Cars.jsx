import Car from "./Car"

function Cars(){
    return <div className="max-w-285 w-[80%] mx-auto grid grid-cols-4 gap-7">
        <Car/>
        <Car/>
        <Car/>
        <Car/>
    </div>
} 

export default Cars;