import React, { useState, ChangeEvent } from "react";
import "./App.css";
import { ITask } from "./components/Interfaces";
function App() {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTask = (): void => {
    const newTask = { taskName: task };
    setTodo([...todo, newTask]);
    setTask("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <input
          type="text"
          placeholder="Task..."
          name="task"
          value={task}
          onChange={handleChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todo.map((el) => {
          return (
            <div
              style={{
                border: "1px black solid",
              }}>
              <p>{el.taskName}</p>
              <button
                onClick={() => {
                  completeTask(el.taskName);
                }}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
