import { useDispatch } from "react-redux";
import { increaseCountAction } from "../../store/actions/count.action";

function Increase() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(increaseCountAction(9))}>+</button>;
}

export default Increase;
