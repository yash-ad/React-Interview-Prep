import {createSlice,nanoid} from '@reduxjs/toolkit';


//Lets create first an intial state for store:-
//Its an object.
//By default state
const initialState  = {
    todos:[{id:1,text:"Hello React and Redux"}]
}


//Lets create a slice :-
export const todoSlice = createSlice({
 //Give it a slice name property for 'todo'.
name:todo,
//Every slice has an initial state.
initialState,
//reducers for functionality
//Within a reducers there is a property and functions.
//State changes are handled by reducers which takes two arguments the current state and action and return a new state
reducers:{
//Lets create an addTodo functionality for adding the todo list with property and function 'key:function'
addTodo:(state,action)=>{
const todo = {id:nanoid,
    text:action.payload,
}
state.todos.push(todo)
}
,
//Lets create a removeTodo functionality for removing the todo list with property and function 'key:function'
removeTodo:(state,action)=>{
    //values overwrite
    //lets apply filter for filtering  the id that item we want to remove
    state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
},
updateTodo:(state,action)=>{
//values overwrite for the text with the matched id.
state.todos = state.todos.map((todo)=> todo.id === action.payload.id ?{...todo,text:todo.text} : todo)
}
}
})


//Lets export individually
export const {addTodo,removeTodo,updateTodo}= todoSlice.actions