import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../features/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const [editId, setEditId] = useState(null);

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const handleAddOrUpdate = (event) => {
        event.preventDefault();
        if (editId !== null) {
            // If an edit is in progress, update the todo
            dispatch(updateTodo({
                id: editId,
                text: input
            }));
            setEditId(null); // Reset edit state after update
        } else {
            // Otherwise, add a new todo
            dispatch(addTodo(input));
        }
        setInput(''); // Reset input field after adding/updating
    };

    return (
        <form onSubmit={handleAddOrUpdate} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                {editId !== null ? 'Update Todo' : 'Add Todo'}
            </button>
        </form>
    );
}

export default AddTodo;
