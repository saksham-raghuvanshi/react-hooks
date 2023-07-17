import React from "react";
import NoteContext from "./noteContext";
import { useContext } from "react/cjs/react.production.min";
import { useState } from "react/cjs/react.development";

const NoteState = (props) => {
  const s = {
    name: "Smasung S21",
  };

  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "Samsung S21 FE 5g",
      });
    }, 1000);
  };
  return (
    <NoteContext.Provider value={(state, update)}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

export const useNote = () => useContext(NoteContext);
