import { users } from "./constants";
import { TodoItems } from "./features/Todos/components/TodoItems/TodoItems";
import { UserCard } from "./features/Todos/components/UserCard/UserCard";

function App() {
  return (
    <div className="App">
      <TodoItems />
    </div>
  );
}

export default App;
