import "./App.css";
import Todos from "./component/Todos";
import NewTodo from "./component/NewTodo";
import TodosContextProvider from "./component/store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
