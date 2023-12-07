// import useState dari library React
import { useState } from "react";

// mendeklarasikan komponen header dan setRefresh sebagai parameter
const Header = ({setRefresh}) => {
  // menggunakan useState untuk membuat state task dengan nilai awal kosong
  const [task, setTask] = useState("");

  // untuk menambah data todo melalui API ketika tombol "Add" di klik
  // dan ketika pertama kali di upload task akan berupa false
  const addTodo = () => {
	  const newTodo = {task, done: false}

    //membuat request ke API dengan method post
	  fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        }).then(() => {
			setTask("")
			setRefresh(true)

      // akan menampilkan alert setelah 500ms task di tambahkan
			setTimeout(() => {
				alert('new todo added.')
			}, 500)
        });
  }

  return (
    // membuat header dan memanggil header dari css yang sudah dibuat
    <div id="todo-header" className="header">
      <h2>Task Todo Rivanda 3IA08</h2>
	  <input 
		  type="text"
		  value={task}
		  onChange={(e) => setTask(e.target.value)}
	  />
      <span className="add-button" onClick={addTodo}>Add</span>
    </div>
  );
};

export default Header;