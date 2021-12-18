import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import BasicReact from "./pages/basic/React";
import BasicLogin from "./pages/basic/Login";
// import BasicHome from "./pages/basic/Home";
// import BasicMovieDetail from "./pages/basic/DetailMovie";
// import BasicOrder from "./pages/basic/Order";
import Detail from "./pages/main/MovieDetail";
import Login from "./pages/auth/Login";
import Register from "./pages/auth//Register";
import Home from "./pages/main/Home";
import Order from "./pages/main/Order";
import Payment from "./pages/main/Payment";
import Profile from "./pages/main/ProfileUser";
import TiketResult from "./pages/main/TiketResult";
import OrderHistory from "./pages/main/OrderHistory";
import ManageMovie from "./pages/main/AdminManageMovie";
import ManageSchedule from "./pages/main/AdminManageSchedule";
import Dashboard from "./pages/main/AdminDashboard";

import PrivateRoute from "./helper/roots/PrivateRoute";
// import PublicRoute from "./helper/roots/PublicRoute";

// redux
// import CounterClass from "./pages/basic/Counter/counter.class";
// import CounterFunc from "./pages/basic/Counter/counter.functional";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              {/* <Route path="/basic-react" exact component={BasicReact} /> */}
              {/* <PublicRoute path="/basic-react" exact component={BasicReact} />
             
              <PrivateRoute path="/basic-home" exact component={BasicHome} />
              <Route
                path="/basic-detail/:movieId"
                exact
                component={BasicMovieDetail}
              />
              <Route path="/basic-order" exact component={BasicOrder} /> */}
              {/* <PublicRoute
                path="/basic-counter-class"
                exact
                component={CounterClass}
              />
              <PublicRoute
                path="/basic-counter-func"
                exact
                component={CounterFunc}
              /> */}

              {/* user */}
              <Route
                path="/basic-login"
                restricted={true}
                exact
                component={BasicLogin}
              />
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
              <Route path="/" exact component={Home} />
              <PrivateRoute path="/detail/:movieId" exact component={Detail} />
              <PrivateRoute path="/order" exact component={Order} />
              <PrivateRoute path="/payment" exact component={Payment} />
              <PrivateRoute path="/profile" exact component={Profile} />
              <PrivateRoute path="/tiketresult" exact component={TiketResult} />
              <PrivateRoute
                path="/orderhistory"
                exact
                component={OrderHistory}
              />
              {/* admin */}
              <Route path="/managemovie" exact component={ManageMovie} />
              <Route path="/manageschedule" exact component={ManageSchedule} />
              <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
