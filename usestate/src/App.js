import { flushSync } from "react-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Record React Lectures", completed: true },
    { id: 7825, name: "Edit React Lectures", completed: false },
    { id: 8391, name: "Watch Lectures", completed: false },
  ]);

  function handleAdd() {
    setCount(count + 1);
    // console.log(count)
  }

  function handleAdd3() {
    //not do this
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  function handleSub() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }
  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        {/* //onclick = {handleclick} it exciute when we click on button or anonymous function {() => count +1}
      // onclick = {handleclick} it excute on render also */}

        <button onClick={handleAdd} className="add">
          Add
        </button>
        <button onClick={handleSub} className="sub">
          Sub
        </button>
        <button onClick={handleAdd3} className="add">
          Add 3 Times
        </button>
        <button onClick={handleReset} className="reset">
          Reset
        </button>
      </div>

      <div>
        <h1>Task List</h1>
        <ul>
          {/* {tasks}  we cannot access directly we can access individual so we need to use map  */}
          {tasks.map((task) => (
            <li key={task.id}>
              <span>
                {task.id} - {task.name}
              </span>
              <button>Delete</button>
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
