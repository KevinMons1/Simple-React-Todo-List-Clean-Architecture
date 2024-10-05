import {createSlice} from "@reduxjs/toolkit";
import {Todo} from "@/modules/todo/domain/entities/todo.entity.ts";

type initialStateType = {
    todos: Todo[];
}

const initialState: initialStateType = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
    }
})

export const { addTodo, setTodos } = todoSlice.actions
