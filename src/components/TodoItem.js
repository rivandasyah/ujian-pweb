const TodoItem = ({ todo }) => {

  const updateTodo = () => {
    todo.done = !todo.done

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

  const deleteTodo = () => {
    fetch("http://localhost:8000/todos/" + todo.id, {
      method: "DELETE",
    }).then(() => {
      console.log('todo deleted.')
    });
  };

  return (
    <li className={`${todo.done ? "checked" : ""}`}>
      <div onClick={updateTodo}>{todo.task}</div> 
      <span className="close" onClick={deleteTodo}>x</span>
    </li>
  );
};

export default TodoItem;