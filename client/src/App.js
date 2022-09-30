import "./styles/style.css";
import { fetchData } from "./redux/action";
import { useDispatch } from "react-redux";
import Filter from "./components/filterComponents/filter"
import Table from "./components/table";
import Pagination from "./components/pagination";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchData());
  return (
    <div className="App">
      <Filter />
      <Table />
      <Pagination />
    </div>
  );
}

export default App;
