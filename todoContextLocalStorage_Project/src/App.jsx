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


//3.Delete TODO functionality:-
//here we want to delete the specific id using filter method , becuase we know that the Filter Method checks the condition with a boolean value either it true or false
// Here to acheive the goal is to find the id and it is not matching  to the given id which has passed from the deleteTodos method
const deleteTodo = (id)=>{
setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !==  id))
}


//4.toggle Checkbox TODO functionality:-
//Here in this functionality we want to acheive is to check the item  , to the task is completed, the goal is to acheive the matching and id using map to loop on an existing values or for previous values , if there would be match it edits into the UI and add a new todo
//with using not operator to opposites the value if there it is false and the overwrite convert them into true and if there is True then convert them into the false.tahst itg j
const toggleComplete = (id)=>{
setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id)? {...prevTodo,completed:!prevTodo.completed} :prevTodo)
}


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