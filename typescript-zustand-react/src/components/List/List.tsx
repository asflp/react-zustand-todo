import {ListItem} from "./ListItem";
import "./List.css"
import {Todo} from "../../Todo";

interface Props {
    todos: Todo[];
    checkTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export const List = (props: Props) => {

    const sortTodo = (todos: Todo[]) => {
        return (todos.filter((todo) => !todo.checked).concat(todos.filter((todo) => todo.checked)));
    };

    return (
        <div className={"container_list"}>

            <div className={"label_list"}>{props.todos.length == 0 ? "Список задач пуст" : "Список задач:"}</div>

            {sortTodo(props.todos).map((todo) => (
                <ListItem key={todo.id} todo={todo} checkTodo={props.checkTodo} deleteTodo={props.deleteTodo}/>
            ))}

        </div>
    )
}