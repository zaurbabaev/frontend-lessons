import { useDispatch, useSelector } from "react-redux";
import { addToListAction } from "../../store/actions/list.action";

function Counter() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(count);
  return (
    <button
      onClick={() => dispatch(addToListAction(count))}
      style={{ marginInline: "5px" }}>
      {count}
    </button>
  );
}

export default Counter;
