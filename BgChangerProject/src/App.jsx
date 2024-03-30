import { useState } from "react"


function App() {
  //Set an intial color by default of value to be "black".
const[color,setColor] = useState("black");

   
{/* //For implementing style using 'internal or inline css' */}
{/* and Inject the variable using Evaluated expression */}
  return (
<div className="w-full h-screen duration-200"
style={{backgroundColor:color}}>
 <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
 <div className="flex flex-wrap bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl ">
<button className="outline-none text-white rounded-full px-4 py-1 shadow-lg" style={{backgroundColor:"red"}}
onClick={()=> setColor("Red")}>Red</button>
<button className="outline-none text-white rounded-full px-4 py-1 shadow-lg" style={{backgroundColor:"blue"}}
onClick={()=> setColor("Blue")}>Blue</button>
<button className="outline-none text-white rounded-full px-4 py-1 shadow-lg" style={{backgroundColor:"green"}}
onClick={()=> setColor("green")}>green</button>
<button className="outline-none text-white rounded-full px-4 py-1 shadow-lg" style={{backgroundColor:"pink"}}
onClick={()=> setColor("pink")}>pink</button>
<button className="outline-none text-white rounded-full px-4 py-1 shadow-lg" style={{backgroundColor:"orange"}}
onClick={()=> setColor("orange")}>orange</button>
<button className="outline-none text-white rounded-full px-4 py-1 shadow-lg" style={{backgroundColor:"grey"}}
onClick={()=> setColor("grey")}>grey</button>
<button className="outline-none text-white rounded-full px-4 py-1 shadow-lg" style={{backgroundColor:"purple"}}
onClick={()=> setColor("purple")}>purple</button>
 </div>
</div>
</div>
  )
}

export default App
