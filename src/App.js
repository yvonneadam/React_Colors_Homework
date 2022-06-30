import React, { useState } from "react";
import "./App.css";
import { ColorBox } from "./components/ColorBox/ColorBox";
import { ColorForm } from "./components/ColorForm/ColorForm";

const colors = [
  {
    id: 1,
    code: "#CEA2F2",
  },
  {
    id: 2,
    code: "#DBAF9D",
  },
  {
    id: 3,
    code: "#F2EDA2",
  },
];

function App() {
  return (
    <div className="App">
      <h1>| PANTONE COLOR MATCHES |</h1>
      <h2>play with cards</h2>
      <div className="card__container">
        {colors.map((color) => {
          return <ColorBox color={color.code} key={color.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
