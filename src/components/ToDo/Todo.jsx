import { useState } from "react";

const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setListItems([...listItems, inputValue]); //добавление нового элемента в массив
    setInputValue("");
  };

  const handleDeleteTask = () => {
          
    setListItems([]);
  };

  return (
    <div className="main_container">
      <div className="todo_container">
        <h1 className="todo_title">To Do App</h1>
        <div className="input_tasks">
          <input
            className="input_bar"
            type="text"
            placeholder="Enter Tasks Here"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="input_button">
            <button onClick={handleClick} className="save_button">
              Save
            </button>
            <button className="get_button">Get Tasks</button>
          </div>
        </div>
        <div className="tasks_container">
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>
                <input onClick={handleDeleteTask} type="checkbox" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
