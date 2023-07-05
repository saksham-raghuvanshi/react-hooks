import "./App.css";

function App() {
  let count = 0;
  return (
    <div className="App">
      <div className="box">{count}</div>
      {/* //onclick = {handleclick} it exciute when we click on button
      // onclick = {handleclick} it excute on render also */}
    </div>
  );
}

export default App;
