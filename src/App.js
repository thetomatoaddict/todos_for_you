import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { DarkModeProvider } from "./context/DarkModeContext";
import TodoListRed from "./components/TodoList/TodoListRed";
import TodoListGold from "./components/TodoList/TodoListGold";
import TodoListGreen from "./components/TodoList/TodoListGreen";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFliter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => {
          setFliter(filter);
        }}
      />
      <div className="cards">
        <div className="card">
          <TodoListRed filter={filter} title='하지 않으면 죽음뿐!'/>
        </div>
        <div className="card">
          <TodoListGold filter={filter} title='데드라인 내에 완료!'/>
        </div>
        <div className="card">
          <TodoListGreen filter={filter} title='언젠가는 해야지!'/>
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;
