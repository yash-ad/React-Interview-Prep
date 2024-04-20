import { useState } from 'react';
import {useTodo} from '../contexts/TodoContext'




//here todo as a prop it contains from a context and its an object thats why it is destructured and it is a single todo
function TodoItem({todo}) {
    
//Extracted values from useTodo () hook which comes from context:-
const{toggleComplete,updateTodo,deleteTodo} = useTodo();

//Created the state for editable todo:-
const [isTodoEditable,setIsTodoEditable] = useState(false);

//Created the state for Todo message :-
//Here todo  as a prop which is an object so todo.todo , here after the dot notation the 'todo' is a message which comes from a context.
const [todoMsg,setTodoMsg] = useState(todo.todo);



///.Lets come to the functionalities which we are creating right overhere:-

//1.for editing and updating the todo message.
//Here each individual todo has an id ,and here todo is an object that we are  passing into the curl braces and spreading the existing values
const editTodo = ()=>{
    updateTodo(todo.id,{...todo,todo:todoMsg});
    setIsTodoEditable(false)
}

//2.For toggling the todos message and to show that the completed task.
const toggleCompleted = ()=>{
toggleComplete(todo.id)
}

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
