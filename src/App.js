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
import Payment from "./pages/main/Payment";
import Profile from "./pages/main/ProfileUser";
import TiketResult from "./pages/main/TiketResult";

import PrivateRoute from "./helper/roots/PrivateRoute";
import PublicRoute from "./helper/roots/PublicRoute";

// redux
import CounterClass from "./pages/basic/Counter/counter.class";
import CounterFunc from "./pages/basic/Counter/counter.functional";

import { Provider } from "react-redux";
import store from "./Stores/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/* <Route path="/basic-react" exact component={BasicReact} /> */}
            <PublicRoute path="/basic-react" exact component={BasicReact} />
            <PublicRoute path="/basic-login" restricted={true} exact component={BasicLogin} />
            <PrivateRoute path="/basic-home" exact component={BasicHome} />
            <Route path="/basic-detail/:movieId" exact component={BasicMovieDetail} />
            <Route path="/detail/:movieId" exact component={Detail} />
            <Route path="/login" exact component={Login} />
            <Route path="/homepage" exact component={Home} />
            <Route path="/order" exact component={Order} />
            <Route path="/payment" exact component={Payment} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/tiketresult" exact component={TiketResult} />
            <PublicRoute path="/basic-counter-class" exact component={CounterClass} />
            <PublicRoute path="/basic-counter-func" exact component={CounterFunc} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
