import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";
import { getFilteredItems } from "./TodoListRed";

export default function TodoListGreen({ filter, title}) {
  const [todos, setTodos] = useState(readTodosFromLocalStorage());

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));
  useEffect(()=>{
    if (localStorage.getItem('landedG')){
      localStorage.setItem(`todosgreen`, JSON.stringify(todos));
    } else {
      localStorage.setItem('landedG', true)
      setTodos([
        {
            "id": "b698388d-f773-403e-a8f2-21200c5cef8e",
            "text": "화장실 청소하기",
            "status": "active"
        },
        {
            "id": "a9160551-d562-4176-bea7-df957430ef8e",
            "text": "오븐 청소",
            "status": "completed"
        },
        {
            "id": "14e0dca7-fae1-4d45-a4e5-9d15e5400a1d",
            "text": "국내여행 계획 짜기",
            "status": "active"
        },
        {
            "id": "bc978613-894d-4ed4-b4b2-b167274cf1ac",
            "text": "강아지와 인생네컷 찍기",
            "status": "active"
        },
        {
            "id": "4e9ba468-4eb4-444b-b1eb-5edbb02160fa",
            "text": "친구 공연 보러가기",
            "status": "completed"
        }
    ])
    }
  },[todos])
  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <div style={{backgroundColor : 'green' }}>
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


export function readTodosFromLocalStorage(){
  const todos = localStorage.getItem('todosgreen');
  return todos ? JSON.parse(todos) : [];
}
