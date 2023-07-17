import React from "react";
import NoteState from "./noteState";

const App = () => {
  return (
    <div>
      <NoteState>
        <Home />
        <Product />
      </NoteState>
    </div>
  );
};

export default App;
