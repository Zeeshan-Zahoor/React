import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';


export const AddTodo = () => {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("");
    }

    return (
        <form
            onSubmit={addTodoHandler}
            className="flex justify-center items-center gap-3 mt-12"
        >
            <input
                type="text"
                className="w-72 rounded-lg border border-gray-700
    bg-gray-800 text-gray-100 px-4 py-2
    outline-none transition duration-200
    focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                type="submit"
                className="text-white bg-indigo-500 px-6 py-2
    rounded-lg text-lg transition duration-200
    hover:bg-indigo-600"
            >
                Add
            </button>
        </form>

    )
}
