import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoListRed({ filter, title}) {
  const [todos, setTodos] = useState(readTodosFromLocalStorage());

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));
  useEffect(()=>{
    localStorage.setItem(`todosred`, JSON.stringify(todos));
  },[todos])
  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <div style={{backgroundColor : 'red' }}>
        <p>{title}</p>
      </div>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

export function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

export function readTodosFromLocalStorage(){
  const todos = localStorage.getItem('todosred');
  return todos ? JSON.parse(todos) : [];
}
