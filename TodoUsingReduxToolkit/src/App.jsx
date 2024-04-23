
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {


  return (
    <>
  <h1 className='text-2xl text-white'>Todo using Redux-toolkit</h1>
  <AddTodo/>
  <Todos/>
    </>
  )
}

export default App
