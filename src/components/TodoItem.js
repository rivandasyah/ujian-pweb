// deklarasi komponen TodoItem yang punya satu parameter yaitu todo
const TodoItem = ({ todo }) => {
  
  // deklarasi updateTodo buat update data
  const updateTodo = ({}) => {
    todo.done = !todo.done // buat ngubah kalau misalkan task selesai itu tanda nya false dan sebaliknya

// ngelakuin permintaan ke API dengan id nya, kalau misalkan ke update maka akan ada pesan di console log
    fetch("http://localhost:8000/todos/" + todo.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    }).then(() => {
      console.log('todo updated.')
    })
  }

// ngelakuin permintaan ke API dengan id nya, kalau misalkan ke delete maka akan ada pesan di console log
  const deleteTodo = () => {
    fetch("http://localhost:8000/todos/" + todo.id, {
      method: "DELETE",
    }).then(() => {
      console.log('todo deleted.')
    });
  };

  return (
    // ngecek kalau di todo nya udah selesai atau belum
    <li className={`${todo.done ? "checked" : ""}`}>
      {/* kalau misalkan di klik bakal manggil updateTodo */}
      <div onClick={updateTodo}>{todo.task}</div> 
      {/* dan kalau x nya yang di klik bakal manggil deleteTodo  */}
      <span className="close" onClick={deleteTodo}>x</span> 
    </li>
  );
};

export default TodoItem;