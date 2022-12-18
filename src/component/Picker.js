import React from "react";
import Style from "../module/Style";

const Picker = ({ changeColor }) => {
  const colors = ["#efadce", "#6ea8fe"];
  const colors2 = ["#ffe69c", "#a6e9d5", "#c29ffa"];
  return (
    <div className="picker">
      <p>장소(실내: 붉은색 / 실외: 파란색)</p>
      <div className="place">
        {colors.map((color, index) => (
          <div
            className="custom-check-box"
            style={Style(color)}
            onClick={() => changeColor(color)}
            key={index}
          />
        ))}
      </div>
      <p>도구(노란색 : / 녹색 : / 보라색 : )</p>
      <div className="tool">
        {colors2.map((color, index) => (
          <div
            className="custom-check-box2"
            style={Style(color)}
            onClick={() => changeColor(color)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Picker;
