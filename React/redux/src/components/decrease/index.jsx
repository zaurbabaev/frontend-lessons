import { useDispatch } from "react-redux";
import { decreaseCountAction } from "../../store/actions/count.action";

function Decrease() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(decreaseCountAction(10))}>-</button>;
}

export default Decrease;
