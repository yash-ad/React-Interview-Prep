import { useEffect, useState } from 'react'
import {TodoProvider} from './contexts/Index'
import TodoForm from './components/TodoForm';

function App() {

  //Initially we need a useState hook for storing and something change into the UI:-
  //State Creation of Todo:-
  const[todos,setTodos]= useState([])



  ///Lets create functionalities for Adding,Updating,Deleting and  for checking the items:-
  
  //1.Add TODO functionality:-
  //And how to modify a state variable By using setState function and the function comes with the second parameter of an array.
//Here we have accessed a callback function into the setState function because we want a previous values whenever we add a new todos, if we directly add a new todo into the setState function it just creates a new todo and updates the UI with a new values , we are unable to access a previous todos.
//here we are also creating dynamic values using `Date.now()` to generate specific id.
  const addTodo = (todo)=>{
setTodos((prev)=> [{id:Date.now(),...todo},...prev])
console.log(setTodos);
};

//2.update TODO functionality:-
//We know that  'todos' is an array and array must be loop to find an individual value, and here we are using map.
//Every Individual todo will find , and every Individual todo is an object and every object has an Id,
//here the task is every individual todo it is an object and it has a specific Id, so we want that that individual id is matching to the updateTodo id .
//If it is the update the todo that means here is an edit with the todo msg or otherwise remain prevTodo as it is.
const updateTodo = (id,todo)=>{
setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo))
};


//3.Delete TODO functionality:-
//Here we want to delete the specific Id using filter method , because we know that the Filter Method checks the condition with a boolean value either it true or false
//Here to acheive the goal is to find the Id of a prevTodo and it is not matching  to the given id which has passed from the deleteTodos method
const deleteTodo = (id)=>{
setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !==  id))
};


//4.toggle Checkbox TODO functionality:-
//Here in this functionality we want to acheive is to check the item for the task is completed, the goal is to acheive the matching an Id using map to loop on an existing values or for previous values.
//with using not operator to opposites the value if there it is false and the overwrite convert them into true and if there is True then convert them into the false.Thats it!
const toggleComplete = (id)=>{
setTodos((prev)=> 
prev.map((prevTodo)=> 
prevTodo.id === id ? {...prevTodo,
  completed:!prevTodo.completed} :prevTodo))
}


//Lets create an useEffect Hook ():-
//We know that useEffect hook it accepts two arguments , the first is callback function and the second is dependency array:-
//Here the purpose of useEffect hook is when the component renders ,the component should show the todo datas.
//In the useEffect hook the callback function will be called after the component renders.
//Whenver the component renders and as soon as the render cycle is finished,It will quickly call the useEffect's callBack function and it re-renders the component.
//And here is an empty dependency array with init that means it will render only just once initially.

//localStorage.getItem("key");
//Lets check the condition if the "todos" exist or not
//True && True -> True
//True && false -> false
//false && True -> false
//false && false -> false
useEffect(()=>{
const todos = JSON.parse(localStorage.getItem("todos"));
if(todos && todos.length < 0 ){
  setTodos(todos)
}
},[])

//localStorage.setItem("key","value");
//Here we using an another useEffect hook  for same reason it will render the component and as soon as the render cycle is finished , it will quickly call the useEffects callBack function and it will re-render the component
//When the dependency array contains a condition,the callback function will be executed one time during the initial render of the component and also re-renders if there is a change in the condition.
// Here we are using state variable 'todos' as a condition in the dependency array.
//Why because the callBack function will be executed during the intitial render of the component and it will re-render on the condition basis of a change in the dependency array.

useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    //Values are extracted  and destrcutured from an object , which came from a context.
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Creating a Loop mapping on to the todos.Item , because for each item is a single individual todo and Add TodoItem here */}

                    </div>
                </div>
            </div>
            </TodoProvider>
  )
}

export default App