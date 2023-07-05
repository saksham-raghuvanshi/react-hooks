import { useRef } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Record React Lectures", completed: true },
    { id: 7825, name: "Edit React Lectures", completed: false },
    { id: 8391, name: "Watch Lectures", completed: false },
  ]);

  const [progress, SetProgress] = useState("");
  const taskref = useRef("");

  function handleDelete(id) {
    setTasks(tasks.filter((task) => id !== task.id));
  }

  const handleReset2 = () => {
    taskref.current.value = "";
    SetProgress(false);
  };

  const handlesubmit = (ev) => {
    ev.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskref.current.value,
      complete: Boolean(progress),
    };

    setTasks([...tasks, task]);
    console.log(task);
    handleReset2();
  };

  return (
    <div className="App">
      <div>
        <section className="addtask">
          <form onSubmit={handlesubmit}>
            <label htmlFor="task">Task Name:</label>
            <input
              id="task"
              type="text"
              name="task"
              placeholder="Task name"
              ref={taskref}
            />
            <select
              onChange={(ev) => {
                SetProgress(ev.target.value);
              }}
              value={progress}
            >
              <option value={true}>Complete</option>
              <option value={false}>Pending</option>
            </select>

            <button type="submit">Add task</button>
            <span onClick={handleReset2} className="reset">
              Reset
            </span>
          </form>
          {/* Here we can't rerender value with useRef */}
          <p>{taskref.current.value}</p>
        </section>
        <h1>Task List</h1>
        <ul>
          {/* {tasks}  we cannot access directly we can access individual so we need to use map  */}
          {tasks.map((task) => (
            <li key={task.id}>
              <span>
                {task.id}: {task.name}
              </span>
              <button onClick={() => handleDelete(task.id)} className="delete">
                Delete
              </button>
            </li>
          ))}

          {/* {tasks.map(({ id, name, completed }) => (
            <li>
              <span>
                {id} - {name}
              </span>
              <button>Delete</button>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}

export default App;
