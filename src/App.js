import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicReact from "./pages/basic/React";
import BasicLogin from "./pages/basic/Login";
import BasicHome from "./pages/basic/Home";
import BasicMovieDetail from "./pages/basic/DetailMovie";
import Detail from "./pages/main/MovieDetail";
import Login from "./pages/auth/Login";
import Home from "./pages/main/Home";
import Order from "./pages/main/Order";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/basic-react" exact component={BasicReact} />
          <Route path="/basic-login" exact component={BasicLogin} />
          <Route path="/basic-home" exact component={BasicHome} />
          <Route path="/basic-detail/:movieId" exact component={BasicMovieDetail} />
          <Route path="/detail/:movieId" exact component={Detail} />
          <Route path="/login" exact component={Login} />
          <Route path="/homepage" exact component={Home} />
          <Route path="/order" exact component={Order} />
        </Switch>
      </Router>
    );
  }
}

export default App;
