import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  const handleEditToggle = (taskId) => {
    setToDos((prevToDos) =>
      prevToDos.map((task) => {
        if (task.id === taskId) {
          return { ...task, isEdit: !task.isEdit };
        }
        return task;
      })
    );
  };

  const handleCheckboxChange = (taskId) => {
    setToDos((prevToDos) =>
      prevToDos.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: !task.status };
        }
        return task;
      })
    );
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            setToDos([
              ...toDos,
              { id: Date.now(), text: toDo, status: false, isEdit: false }
            ]);
            setToDo('');
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={() => handleCheckboxChange(obj.id)}
                checked={obj.status}
                type="checkbox"
                name=""
                id=""
              />
              <p className={` ${obj.status ? 'completed' : ''}`}>{obj.text}</p>
              <i
                onClick={() => handleEditToggle(obj.id)}
                className={`fas ${obj.isEdit ? 'fa-times' : 'fa-edit'}`}
              ></i>
            </div>
            <div className="right">
              <i
                onClick={() => {
                  setToDos((prevToDos) =>
                    prevToDos.filter((task) => task.id !== obj.id)
                  );
                }}
                className="fas fa-times"
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
