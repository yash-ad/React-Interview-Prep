import { useState } from 'react'


function App() {
  const [count, setCount] = useState(15)

  console.log(count);

  const incrementValue = ()=>{
      //Now here the basic interview question?
      //Here the process is with the useState() hook works with the batches 'diffing' algorithm with react fiber and repeat that task again and again same.
      // setCount(count + 1);
      // setCount(count + 1);
      // setCount(count + 1);
      // setCount(count + 1);

      //Here in the second approach what we are doing is, we are using callback function within setState function and it accepts.
    // so here batches wont work it takes a callback function and add a previous value,the useState hook updates the state and add a value on it.
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1);

  };

  return (
    <>
    <h1>Counter Interview Question</h1>
    <h2>counter: {count}</h2>
<button onClick={incrementValue}>Add Value</button>
    </>
  )
}

export default App
