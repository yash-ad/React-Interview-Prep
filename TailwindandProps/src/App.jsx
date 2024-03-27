import Card from './Card'
import './App.css'

function App() {

  return (
    <>
     <h1 className ='bg-purple-400 text-black p-4 rounded-xl mb-4 flex'>Hello Tailwind , Welcome to ReactJs</h1>
    <Card username="Bela" btnText="click me"/>
    <Card username="Ana" btnText="visit me" />
    </>
  )
}

export default App
