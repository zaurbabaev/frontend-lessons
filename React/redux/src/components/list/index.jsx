import { useDispatch, useSelector } from "react-redux";
import { removeFromListAction } from "../../store/actions/list.action";

export default function List() {
  const { list } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <ul>
      {list.map((item) => (
        <li key={item}>
          <span>{item}</span>
          <button onClick={() => dispatch(removeFromListAction(item))}>
            x
          </button>
        </li>
      ))}
    </ul>
  );
}
