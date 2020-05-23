import React from 'react'

const Todos1 = ({todos1, deletetodo1}) =>{
    const todo1list = todos1.length ? (
        todos1.map(todo =>{
            return <div className="collection-item" key='todo.id'>
                <p>{todo.content}</p>
                <button onClick={() => {deletetodo1(todo.id)}}>Remove</button>
                
            </div>
        })
    ) : (
        <p className="center">No Award's left !</p>
    )
    return <div className="todos collection">
            {todo1list}
    </div>
}

export default Todos1