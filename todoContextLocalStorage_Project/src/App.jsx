import { useState } from 'react'
import {TodoProvider} from './contexts/Index'

function App() {

  //Initially we need a useState hook for storing and something chang in the UI:-
  //State Creation of Todo
  const[todos,setTodos]= useState([])

  //Lets create functionalities for Adding,Updating,Deleting and  for checking the items:-
  
  //1.Add TODO functionality:-
  const addTodo = (todo)=>{
    //And how to modify a state variable By using setState function and the function comes with the second parameter of an array.
setTodos((prev)=> [{id:Date.now(),...todo},...prev])
  }

//2.update TODO functionality:-
//We know that  'todos' is an array and array must be loop to find an individual value, and here we are using map.
//Every todo will find , and every todo is an object and eveny object has an Id,
//here the task is eveny individual todo is an object and it has a specific Id so we want that that individual id is matching to the updatTodo id .
const updateTodo = (id,todo)=>{
setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo))
}


//3.

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
            </>
  )
}

export default App