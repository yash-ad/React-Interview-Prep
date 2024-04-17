import {createContext,useContext} from 'react'


export const TodoContext = createContext({

});


export default const TodoProvider = TodoContext.Provider;


export const useTodo = ()=>{
return useContext(TodoContext)
};