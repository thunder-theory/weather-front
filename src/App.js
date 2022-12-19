import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import Calendar from "./containers/Calendar";

import "./App.css";
import "./style/calendar.css";
import "./style/table.css";
import "./style/modal.css";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/calendar" component={Calendar} />
        </Switch>
      </div>
    </Router>
  );
}

