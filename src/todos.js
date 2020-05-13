import React from 'react'
import App from './App'

const Todos = ({todos, deletetodo}) =>{
    const todolist = todos.length ? (
        todos.map(todo =>{
            return <div className="collection-item" key='todo.id'>
                <p>{todo.content}</p>
                <button onClick={() => {deletetodo(todo.id)}}>Remove</button>
            </div>
        })
    ) : (
        <p className="center">You have no Todo's Left !</p>
    )
    return <div className="todos collection">
            {todolist}
    </div>
}

export default Todos