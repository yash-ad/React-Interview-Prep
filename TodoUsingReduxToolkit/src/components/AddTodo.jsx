
import { useState } from 'react';
import { addTodo } from '../features/todoSlice';
import {useDispatch} from 'react-redux'

function AddTodo() {
  const[input,setInput] = useState('');

//useDispatch hook for dispatches an actions to the store.
const dispatch = useDispatch();

//addTodoHandler for handling the method of an event when submitting the form.
  const addTodoHandler = (event)=>{
event.preventDefault();
//Within the dispatch lets add 'reducer' to dispatches an action.
dispatch(addTodo(input));
//To clean the state using setState function for better practice and clean code
setInput('')
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
onChange={(event)=> setInput(event.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo