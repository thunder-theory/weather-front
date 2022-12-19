import React from "react";
import Style from "./Style";

function change() {
  const randomcolor = [
    "#F23030",
    "#F2CB05",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
    "#267365",
  ];

  const num = Math.floor(Math.random() * randomcolor.length);
  const color = randomcolor[num];
  const colorchange = { background: color };
  return colorchange;
}

const Schedule = (index, todo) => {
  const result = [];
  if (todo[index] !== undefined) {
    todo[index].map((item) => {
      result.push(
        <li style={change()} key={index + item}>
          {item[0]}
        </li>
      );
    });
    return result;
  }
  return null;
};

export default Schedule;
