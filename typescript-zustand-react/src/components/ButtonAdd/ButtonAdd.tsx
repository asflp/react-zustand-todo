import React from "react";
import "./ButtonAdd.css"

interface Props extends React.ComponentPropsWithRef<'button'>{
    color: 'blue' | 'red';
}

export const ButtonAdd= (props: Props) => {
    const className = `button button_${props.color}`

    return <button type={"button"} className={className} onClick={props.onClick} {...props}>
        {props.children}
    </button>
}