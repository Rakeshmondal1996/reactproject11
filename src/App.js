// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

// import FormWenzins from "./component/FormWenzins";
import Google from "./component/Google";
//import Linkedin from './component/Linkedin';
import Login from "./component/Login";
import Home from "./component/Home";
import Navber from "./component/Navber";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import history from "./component/History";

import { Route, Router, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router history={history}>
          <Navber />
          <Switch>
            <Route path="/Login" exact={true} component={Login} />
            <Route path="/Google" exact={true} component={Google} />
            <Route path="/Home" exact={true} component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
