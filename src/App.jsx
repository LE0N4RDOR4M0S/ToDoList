import { useState, useRef } from 'react';
import "./App.css";
import Filter from './components/Filter';
import Search from './components/Search';
import Todo from './components/Todo';
import Todoform from './components/Todoform';

function App() {
  const [ todos, setTodos ] = useState([]);

  const audioRef = useRef(null);

  const AddTodo = (text,category) => {

    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }]

    setTodos(newTodos);
  };

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filtroTodos = newTodos.filter(todo =>
      todo.id !== id ? todo : null
      );
      setTodos(filtroTodos);
  };

  const completeTodo = (id) =>{
    const newTodos = [...todos]
    newTodos.map((todo) =>
    todo.id === id ? todo.isCompleted = !todo.isCompleted : null
    );
    setTodos(newTodos);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div>
        <audio ref={audioRef} autoPlay loop>
          <source src="src/audio/drunk.mp3" type="audio/mp3" />
          Seu navegador não suporta a tag de áudio.
        </audio>
        <button className="play-pause-button" onClick={togglePlay}>Play/Pause</button>
      <div className="app add">
        < Todoform AddTodo={AddTodo} />
      </div>
    <div className="app">
        <h1>Lista de Tarefas</h1>
        < Search search={search} setSearch={setSearch}/>
        < Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}/>
        <div className="todo-list">
          {todos
            .filter((todo) =>
              filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
            )
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
              )
              .sort((a, b) => sort ==="Asc"
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text))
              .map((todo) =>
            (
            // eslint-disable-next-line react/jsx-key
            <Todo
              key={todo.id}
              todo = {todo}
              removeTodo = {removeTodo}
              completeTodo = {completeTodo}
            />
          ))}
        </div>
    </div>
      <div className="rodape">
        <p>Criado e desenvolvido por Leonardo de Oliveira Ramos</p>
        <p>Contato: leoolivramos@gmail.com</p>
        <p>Mais em: https://github.com/LE0N4RDOR4M0S</p>
      </div>
    </div>
    )
}


export default App
