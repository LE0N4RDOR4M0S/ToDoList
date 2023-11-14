import React from 'react'

const todo = ({ todo }) => {
  return (
    <div className="todo">
        <div className="content">
            <p>{todo.text}</p>
            <p className="categoria">({todo.category})</p>
        </div>
            <div>
                <button className="complete">Completar</button>
                <button className="delete">X</button>
            </div>
    </div>
  )
}

export default todo