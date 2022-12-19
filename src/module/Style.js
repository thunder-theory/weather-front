import React from "react";

/**const randomcolor = ["#FF0000", "#FFFA00", "#00FF08", "#00FF08"];

  const num = Math.floor(Math.random() * randomcolor.length);
  const colorSelect = randomcolor[num];
  const style = { background: (color = colorSelect) };
  return style;
 */

const Style = (color) => {
  const style = { background: color };

  return style;
};

export default Style;
