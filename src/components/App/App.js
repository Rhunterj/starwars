import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import MoviesPage from "../MoviesPage/MoviesPage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={`/movies/:movieTitle/`} component={MoviesPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
