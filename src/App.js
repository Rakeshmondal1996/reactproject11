
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import FormWenzins from './component/FormWenzins';
import Google from './component/Google';
//import Linkedin from './component/Linkedin';
import Login from './component/Login';
import Home from './component/Home';
import Navber from './component/Navber';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import  {useHistory} from 'react-router-dom'


import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'


class App extends Component {
  


  render() {
    const history = useHistory()
    return (

      <div className="app">

<Router>
           <Navber/>
                <Switch>
                     <Route path='/Home' exact={true} component={Home}/>
                     <Route path='/Login' exact={true} component={Login}/>
                     <Route path='/Google' exact={true} {...history} component={Google}/>
                 </Switch>
 </Router>

      </div>

    )
  }
}

export default App;