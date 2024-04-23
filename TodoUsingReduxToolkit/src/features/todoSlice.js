


import { createSlice, nanoid } from '@reduxjs/toolkit';

//1.Lets create first an intial state for store:-
//Its an object.
//By default state

const initialState = {
    // todos: [{ id: 1, text: "Hello React and Redux" }]
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo', 
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
