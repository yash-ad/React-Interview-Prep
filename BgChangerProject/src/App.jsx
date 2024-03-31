import { useState } from "react"


// function App() {
//   //Set an intial color by default of value to be "black".
// const[color,setColor] = useState("black");

   
// {/* //For implementing style using 'internal or inline css' */}
// {/* and Inject the variable using Evaluated expression */}
//   return (
// <div className="w-full h-screen duration-200"
// style={{backgroundColor:color}}>
//  <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
//  <div className="flex flex-wrap bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl ">
// <button className="outline-none text-white rounded-full px-4 py-1 shadow-lg" style={{backgroundColor:"red"}}
// onClick={()=> setColor("Red")}>Red</button>
// <button className="outline-none text-white rounded-full px-4 py-1 shadow-lg" style={{backgroundColor:"blue"}}
// onClick={()=> setColor("Blue")}>Blue</button>
// <button className="outline-none text-white rounded-full px-4 py-1 shadow-lg" style={{backgroundColor:"green"}}
// onClick={()=> setColor("green")}>green</button>
// <button className="outline-none text-white rounded-full px-4 py-1 shadow-lg" style={{backgroundColor:"pink"}}
// onClick={()=> setColor("pink")}>pink</button>
// <button className="outline-none text-white rounded-full px-4 py-1 shadow-lg" style={{backgroundColor:"orange"}}
// onClick={()=> setColor("orange")}>orange</button>
// <button className="outline-none text-white rounded-full px-4 py-1 shadow-lg" style={{backgroundColor:"grey"}}
// onClick={()=> setColor("grey")}>grey</button>
// <button className="outline-none text-white rounded-full px-4 py-1 shadow-lg ml-15" style={{backgroundColor:"purple"}}
// onClick={()=> setColor("purple")}>purple</button>
//  </div>
// </div>
// </div>
//   )
// }

// export default App




///.For practice purpose only:-



const App = ()=>{

  //We have set an intital value of by default is "Black" in the useState hook.
  const [color,setColor] = useState("Black")
 return(
<div className="w-full h-screen duration-200"

// {Injected the state variable in it using evaluated expression using{curly braces}}
style={{backgroundColor:color}}
>
<div className="fixed flex flex-wrap justify-center  bottom-12 px-2 inset-x-0 "
>
<div className="flex flex-wrap bg-white gap-3 px-3 py-2 rounded-3xl shadow-lg"
>
<button className="rounded-full px-4 py-1 outline-none text-white"
// Using onClick event handler, whenever the user clicks on a button or an any element within the application the onClick event calls a function and the called function triggers an action.
// Always remember onClick event handler always acceptsa function or functions reference we can't directly call the function init.
onClick={()=> setColor("Red")}
style={{backgroundColor:"Red"}}>Red</button>
<button className="rounded-full px-4 py-1 outline-none text-white"
onClick={()=> setColor("Green")}
style={{backgroundColor:"Green"}}>Green</button>
<button className="rounded-full px-4 py-1 outline-none text-white"
onClick={()=> setColor("Blue")}
style={{backgroundColor:"Blue"}}>Blue</button>
<button className="rounded-full px-4 py-1 outline-none text-white"
onClick={()=> setColor("Olive")}
style={{backgroundColor:"Olive"}}>Olive</button>
<button className="rounded-full px-4 py-1 outline-none text-white"
onClick={()=> setColor("Yellow")}
style={{backgroundColor:"Yellow"}}>Yellow</button>
<button className="rounded-full px-4 py-1 outline-none text-white"
onClick={()=> setColor("Orange")}
style={{backgroundColor:"Orange"}}>Orange</button>
</div>
</div>
</div>
 ) 
}


export default App;