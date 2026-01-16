function Car(props){
    return <div className="shadow-md rounded-lg p-7.5">
        <img src={props.image} alt="" />
        <p>{props.carName}</p>
    </div>
}

export default Car;