import React from "react";
import "./ColorBox.css";
import "./App.css";

export const ColorBox = ({ color }) => {
  return (
    <div
      className="color-box"
      style={{
        backgroundColor: color,
      }}
      onClick={handleClick}
    >
      <input type="text" value={color} />
      <div className="color-box__delete">X</div>
    </div>
  );
};
