import {FC} from "react";
import {ListItem} from "./ListItem/ListItem";
import "./List.css"
import {Todo} from "../../Todo";

interface ListProps {
    todos: Todo[];
    checkTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export const List: FC<ListProps> = ({todos, checkTodo, deleteTodo}) => {

    const sortTodo = (todos: Todo[]) => {
        return (todos.filter((todo) => !todo.checked).concat(todos.filter((todo) => todo.checked)));
    };

    return (
        <div className={"container_list"}>

            <div className={"label_list"}>{todos.length == 0 ? "Список задач пуст" : "Список задач:"}</div>

            {sortTodo(todos).map((todo) => (
                <ListItem key={todo.id} todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
            ))}

        </div>
    )
}