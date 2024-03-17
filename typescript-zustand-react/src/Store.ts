import create from "zustand";

import { Todo } from "./Todo";
import {useEffect} from "react";

interface TodoState {
    todos: Todo[];
    addTodo: (name:string, description: string) => void;
    deleteTodo: (id: number) => void;
    toggleCompletedState: (id: number) => void;
}

export const useStore = create<TodoState>((set) => ({

    todos: localStorage.getItem('tasks') !== null
        ? JSON.parse(localStorage.getItem('tasks') || "")
        : [
            {id: 1, name: 'task1', description: 'description1', checked: false}
        ],

    addTodo: (name:string, description: string) => {
        set((state) => ({
            todos: [
                ...state.todos,
                {
                    id: state.todos.length === 0 ? 1 : state.todos[state.todos.length - 1].id + 1,
                    name,
                    description,
                    checked: false,
                } as Todo,
            ],
        }));
    },

    deleteTodo: (id) => {
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })
        );
    },

    toggleCompletedState: (id) => {
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id
                    ? ({ ...todo, checked: !todo.checked } as Todo)
                    : todo
            ),
        }));
    },

    onChange: (state: TodoState) => {
        localStorage.setItem('tasks', JSON.stringify(state.todos));
    },
}));