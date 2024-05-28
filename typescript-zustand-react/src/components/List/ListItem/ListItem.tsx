import {ButtonAdd} from "../../ButtonAdd";
import imgEmptyCheck from "../../../assets/circle.png"
import imgFillCheck from "../../../assets/check-circle.png"
import "./ListItem.css"
import {Todo} from "../../../Todo";


interface Props {
    todo: Todo;
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
}
export const ListItem = (props: Props) => {
    return (
        <div className={"item_container"}>
            <div className={"item_container__text"}>
                <div className={"item_container__text__name"}>
                    <img src={props.todo.checked ? imgFillCheck : imgEmptyCheck} className={"item_container__text__name"}
                        onClick={() => props.checkTodo(props.todo.id)}/>

                    <div
                         style={{
                             opacity: props.todo.checked ? 0.5 : 1,
                             textDecoration: props.todo.checked ? 'line-through' : 'none'
                         }}
                         onClick={() => props.checkTodo(props.todo.id)}
                    >
                        {props.todo.name}
                    </div>
                </div>

                <div className={"item_container__text__description"}>
                    {props.todo.description}
                </div>
            </div>
            <div>
                <ButtonAdd color={'red'} onClick={() => props.deleteTodo(props.todo.id)}>
                    Удалить
                </ButtonAdd>
            </div>
        </div>
    )
}