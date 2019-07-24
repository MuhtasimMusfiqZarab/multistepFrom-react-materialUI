import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";

import { UserForm } from "./UserForm";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={UserForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
