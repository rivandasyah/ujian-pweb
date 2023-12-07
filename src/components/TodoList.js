// import useEffect dan useState dari react
import { useEffect, useState } from "react";
// import TodoItem agar bisa dipanggil di TodoList
import TodoItem from "./TodoItem";

// deklarasi komponen TodoList yang punya dua parameter isRefresh dan setRefresh
const TodoList = ({isRefresh, setRefresh}) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // memanggil API untuk mengambil data todos
    if (isRefresh) { // kalau bisa ke refresh berarti dia ngambil data todos
      fetch("http://localhost:8000/todos")
        .then((res) => {
          return res.json();
        })
        .then((data) => { // kalau udah jadi json refresh nya selesai atau jadi false
          setRefresh(false)
          setTodos(data); // bakal ngambil data todos dari api buat ditampilin ke list
        })
        .catch((err) => { // kalau ada error, berarti refresh nya itu selesai
          setRefresh(false)
          if (err.name === "AbortError") {
            console.log("fetch aborted."); // abis itu di console log bakal muncul pesan ini
          }
        });
    }
  }, [isRefresh, setRefresh]);

  // ngembaliin nilai dengan ngebuat komponen TodoList
  return (
    // buat ul dengan id todo-list
    <ul id="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;