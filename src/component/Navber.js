import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'

class Navber extends Component {
    render() {
        return (
            <div>
               <Link to="/home">
                   home
               </Link>
               <Link to="/Login">
                  login
               </Link>
            </div>
        );
    }
}

export default Navber;