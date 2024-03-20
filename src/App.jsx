import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  const handelInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setData([...data, inputValue]);
    if (inputValue) {
      data.map((item, index) => <p key={index}>{item}</p>);
    }else if (inputValue.trim() === ""){
      alert("Input is empty")
      return;
    }
  };

  const lineTrought = (event) => {
    const element = event.target;
    element.classList.toggle("crossed-line");
  };

  const removeMe = (index) => {
    const temp = [...data];
    temp.splice(index, 1);
    setData(temp);
  };

  return (
    <div>
      <TodoList
        line={lineTrought}
        value={handelInput}
        click={handleClick}
        data={data}
        remove={removeMe}
      />
    </div>
  );
}

export default App;
