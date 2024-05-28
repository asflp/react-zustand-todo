import React from "react";
import "./Header.css";

interface Props {
    todoCount: number;
}

export const Header = (props: Props) => {
    return (
    <div className="header_container">
        Todo list
        <div className="header_title">
            Количество невыполненных задач: {props.todoCount}
        </div>
    </div>
    );
}