import {Header, List, Todo} from "./components";
import {useStore} from "./store/Store";
import "./App.css"
import {useEffect} from "react";

function App() {

    const { addTodo, deleteTodo, toggleCompletedState, todos } = useStore();

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(todos));
    }, [todos]);

  return (
      <div className="container_app">
        <Header todoCount={todos.filter((todo: { checked: boolean; }) => !todo.checked).length}/>
        <Todo addTodo={addTodo}/>
        <List todos={todos} checkTodo={toggleCompletedState} deleteTodo={deleteTodo}/>
      </div>
  )
}

export default App
