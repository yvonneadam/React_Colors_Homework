import React, { useState } from "react";
import "./App.css";
import { ColorBox } from "./components/ColorBox";
import { ColorForm } from "./components/ColorForm/ColorForm";

const colors = [
  {
    id: 1,
    code: "#ff0000",
  },
  {
    id: 2,
    code: "#00ff00",
  },
  {
    id: 3,
    code: "#0000ff",
  },
];

function App() {
  return (
    <div className="App">
      <h1>| Pantone Color Matches | </h1>
      <h2>Play with Cards</h2>
      <ColorForm />
      <div className="card__container">
        {colors.map((color) => {
          return <ColorBox color={color.code} key={color.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
