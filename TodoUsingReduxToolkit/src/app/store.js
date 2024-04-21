import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todoSlice'

//Store has to be awareness of reducers from which we have created in a slices.
export const store = configureStore({
reducer:todoReducer
});


