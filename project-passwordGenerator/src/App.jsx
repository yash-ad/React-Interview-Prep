import {useState,useCallback,useEffect,useRef} from "react"



function App() {

  //lets create a useState hook for length,numbers,characters and for password on password generator
  const [length,setLength] = useState(12);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");
  //Lets create a feature of toggle for the copy button,Here the purpose is whenever the user clicks on a button the 'copy' button should toggled into the 'copied' button:-
  // State to track if password has been copied
  const[copied,setCopied] = useState(false);


  //useRef hook:-
  const passwordRef = useRef(null);

  //Lets create a password generator function using useCallBack function:-
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    //lets create a conditions for numberAllowed and charAllowed
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    //Now here loop is governed by length from the PasswordGenerator app
    for (let i = 1; i <= length; i++) {
      //Lets make a character using math.random()  and math.floor() methods for random characters
      let char = Math.floor(Math.random() * str.length + 1);
          //charAt() method for index postioning of a string.
          //Appending the 'pass'
           pass += str.charAt(char)
    }

//How to read the 'pass' value by using setState function here is the setPassWord():-
setPassword(pass);
// Reset copied state whenever password changes.
setCopied(false);
  },[length,numberAllowed,charAllowed,setPassword])


  //useCallback hook:-
  const copyPasswordToClipboard = useCallback(()=>{
passwordRef.current?.select();
window.navigator.clipboard.writeText(password)
setCopied(true); // Set copied state to true when password is copied
  },[password])


//useEffect hook:-
// including passwordGenerator in the dependency array ensures that React re-runs the effect whenever the function is recreated, thus ensuring that the effect always has the correct reference to the latest version of passwordGenerator.
useEffect(()=>{
  passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])
  
  
  return (
<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
      ref={passwordRef}
      
      />
      <button
           onClick={copyPasswordToClipboard}
           className={`outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600 
          ${
            copied ? 'cursor-not-allowed' : ''
          }`}
          // Disable button when password is copied
           disabled={copied}>
           {copied ? 'Copied' :'Copy'}
      </button>
      
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={10}
      max={50}
      value={length}
       className='cursor-pointer'
       onChange={(event)=> setLength(event.target.value)}
        />
        <label>Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
    <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={()=> setNumberAllowed((prev)=> !prev)}
    />
    <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            //using '!' not operator it flips the value of boolean It can be used to convert a true value to a false and vice-versa. This NOT operator can also be used on non-booleans to convert them to the reverse of their actual boolean value.
            onChange={()=>setCharAllowed((prev)=> !prev)} 
        />
        <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
</div>
  )
}

export default App



