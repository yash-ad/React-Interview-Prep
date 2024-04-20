
import  { useState } from 'react'
import {useTodo} from '../contexts/Index'

function TodoForm() {
    

//First of all lets define the state to an individual todo which we have created into the App.jsx
const [todo,setTodo] = useState('');

//Extract the values from useTodo () hook which comes from context.
const{addTodo} = useTodo();

const add = (event)=>{
event.preventDefault();
if(!todo){
    return;
} 
else{
    addTodo({todo,completed:false})
}
setTodo("")
}

    return (
        <form onSubmit={add} id='input-form' className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            //Wiring
            value={todo}
onChange={(event)=> setTodo(event.target.value)}
            />
            <button type="submit" form='input-form' className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

