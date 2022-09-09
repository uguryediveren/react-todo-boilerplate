import React, { useEffect, useState } from 'react';
import './styles.css';
import Footer from "./Footer";
import Header from "./Header";
import Todos from "./Todos";

export default function Todo() {


  // todo
  const [complete, setComplete] = useState(0);


  const [todos, setTodos] = useState([
    {
      text: 'Learn React',
      completed: true
    },
    {
      text: 'Learn Redux',
      completed: false
    },
    {
      text: 'Have a life!',
      completed: false
    }
  ]);

  const [filteredTodos, setFilteredTodos] = useState(todos);


  useEffect(() => {
    let completedTodos = todos.filter(todo => todo.completed);
    setComplete(completedTodos.length);
  }, [todos]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  console.log("filteredTodos", filteredTodos);


  console.log("todos", todos);

  return (
    <div>
      <section className="todoapp">
        <Header setTodos={setTodos} todos={todos} />

        <Todos setTodos={setTodos} filteredTodos={filteredTodos} todos={todos} />

        <Footer todos={todos} complete={complete} setFilteredTodos={setFilteredTodos} filteredTodos={filteredTodos} />
      </section>
    </div>
  );
}
