//Create a parent component that wraps both 'Todos' and 'AddTodos' components:-
import Todos from './Todos';
import AddTodo from './AddTodo';
function ParentComponent() {

    //Add an edit state 
  return (
    <>
    <Todos/>
    <AddTodo/>
    </>
  )
}

export default ParentComponent