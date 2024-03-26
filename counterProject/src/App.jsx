import {useState} from 'react'
import './App.css'


//Lets create a `useState hook` for updating the state. 
function App() {
  
 const [counter,setCounter] = useState(0);


 const  addValue = ()=>{
if(counter < 20){
  setCounter(counter + 1);
}
 }

 const  removeValue = ()=>{
if(counter > 0){
  setCounter(counter - 1);
}
   } 





  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value :{counter}</h2>
      <div className="card">
        <button onClick={addValue}>Addvalue
        </button>

        <br/> 
        <br/> 

        <button onClick={removeValue}>RemoveValue
        </button>
      </div>
    </>
  )
}

export default App
