import { useState } from 'react';
import Todo from './components/Todo';
import "./App.css";
import Todoform from './components/Todoform';

function App() {
  const [ todos, setTodos ] = useState([
    {
      id: 1,
      text: "Titulo da tarefa",
      category: "Trabalho",
      isCompleted: false,
    },
  ])

  const AddTodo = (text,category) =>{

    const newTodos = [...todos,
    {
      id : Math.floor(Math.random * 10000),
      text,
      category,
      isCompleted: false,
    },
  ];

    setTodos(newTodos);
  };

  return <div className="app">
        <h1>Lista de Tarefas</h1>
        <div className="todo-list">
          {todos.map((todo) => (
            // eslint-disable-next-line react/jsx-key
            < Todo key={todo.id} todo = {todo}/>
          ))}
        </div>
        < Todoform AddTodo={AddTodo} />
      </div>;
}

export default App
