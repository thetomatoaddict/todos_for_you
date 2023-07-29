import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";
import { getFilteredItems } from "./TodoListRed";

export default function TodoListGold({ filter, title}) {
  const [todos, setTodos] = useState(readTodosFromLocalStorage());

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));
  useEffect(()=>{
    if (localStorage.getItem('landedY')){
      localStorage.setItem(`todosgold`, JSON.stringify(todos));
    } else {
      localStorage.setItem('landedY', true)
      setTodos([
        {
            "id": "a722c082-36ec-455f-9c46-f11fd5da3b0c",
            "text": "유통기한 짧은 음식부터 냉털",
            "status": "active"
        },
        {
            "id": "bbe1dedb-e9cf-4ff4-b710-c720c9f16a4a",
            "text": "친구 생일선물 준비",
            "status": "completed"
        },
        {
            "id": "e2304f79-89d3-4c95-9f9b-2c2cc0990c2e",
            "text": "분리수거요일 꼭 챙기기",
            "status": "completed"
        },
        {
            "id": "fd758128-0e72-43bc-a6a9-10688b24db30",
            "text": "쇼핑몰 세일 끝나기 전에 주문",
            "status": "active"
        },
        {
            "id": "6b86c417-762a-4127-ab72-1b4ed60eac3d",
            "text": "이번달 강아지 건강검진",
            "status": "active"
        },
        {
            "id": "ba167e6b-9edd-4b98-ad5f-c59e6cf0afff",
            "text": "연말까지 면허 갱신하기",
            "status": "active"
        }
    ])
    }
    
  },[todos])
  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <div style={{backgroundColor : 'gold' }}>
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


function readTodosFromLocalStorage(){
  const todos = localStorage.getItem('todosgold');
  return todos ? JSON.parse(todos) : [];
}
