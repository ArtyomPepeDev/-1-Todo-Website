import { useState } from "react";

const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setListItems([
      ...listItems,
      { text: inputValue, id: Date.now(), completed: false },
    ]); //добавление нового элемента в массив
    setInputValue("");
  };

  const handleCheckBox = (id) => {
    setListItems(
      listItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDeleteTask = (id) => {
    setListItems(listItems.filter((item) => item.id !== id));
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
            {inputValue.length > 4 && (
              <button onClick={handleClick} className="save_button">
                Save
              </button>
            )}
            <button className="get_button">Get Tasks</button>
          </div>
        </div>
        <div className="tasks_container">
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>
                <input
                  checked={item.completed}
                  onChange={() => handleCheckBox(item.id)}
                  type="checkbox"
                />
                {item.text}
                <button onClick={() => handleDeleteTask(item.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
