import Counter from "./components/counter";
import Decrease from "./components/decrease";
import Increase from "./components/increase";
import List from "./components/list";

function App() {
  return (
    <>
      <div>
        <Decrease />
        <Counter />
        <Increase />
      </div>
      <List />
    </>
  );
}

export default App;
