import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from "../features/todo/todoSlice"

export const Todos = () => {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-2xl font-semibold text-center mt-8 mb-4">
        Todos
      </div>

      <ul className="max-w-md mx-auto space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center
            bg-gray-800 text-white px-4 py-2 rounded
            shadow-md"
          >
            <span>{todo.text}</span>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 hover:bg-red-600
              text-white px-3 py-1 rounded
              transition duration-200"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
