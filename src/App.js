import React from "react";
import Calendar from "./containers/Calendar";
import "./style/calendar.css";
import "./style/table.css";
import "./style/modal.css";
import axios from "axios";

const App = () => {
  return (
    <div>
      <Calendar />
    </div>
  );
};

export default App;
