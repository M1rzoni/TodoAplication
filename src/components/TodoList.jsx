
import "./style/TodoList.css";

function TodoList(props) {
  return (
    <div className="container">
      <div className="todo-list">
        <h1>Todo App</h1>
        <input
          onKeyDown={() => {props.click}}
          onChange={props.value}
          type="text"
          placeholder="Add todo..."
        />
        <button onClick={props.click}>Add</button>
        { props.data.map((item, index,) => ( 
          <div  className="list" key={index}>
           
              <p onDoubleClick={props.remove} onClick={props.line}>{item}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
