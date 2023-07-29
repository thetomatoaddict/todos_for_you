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
    if (localStorage.getItem('landedR')){
      localStorage.setItem(`todosred`, JSON.stringify(todos));
    } else {
      localStorage.setItem('landedR', true)
      setTodos([
        {
            "id": "578a916f-a36a-4b61-baba-1fb29bef17a0",
            "text": "증명사진 출력하기",
            "status": "active"
        },
        {
            "id": "3ffee66b-f131-419e-b292-ff4d9b1d448c",
            "text": "전세 재계약 확인하기",
            "status": "active"
        },
        {
            "id": "7bec7756-5a41-4379-83f1-fc917b556827",
            "text": "병원예약하기",
            "status": "completed"
        },
        {
            "id": "a6789316-5931-4e85-989a-44c545a61e3b",
            "text": "카드대금 미리결제",
            "status": "completed"
        },
        {
            "id": "202289c5-d27c-4a64-b5a9-fc7523abd6a9",
            "text": "토요일에 술약속 절대 잊지않기",
            "status": "active"
        },
        {
            "id": "99d7528f-fcd6-46b2-9c89-7a429119ab09",
            "text": "엔진오일 갈기",
            "status": "completed"
        }
    ])
    }
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
