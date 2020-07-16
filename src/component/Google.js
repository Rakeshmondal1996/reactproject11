import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import history from "./History";
import { Button } from "react-bootstrap";

class Google extends Component {
  // constuctor() {
  //   this.routeChange = this.routeChange.bind(this);
  // }

  responseGoogle(response) {
    history.push("/Home");
  }

  render() {
    return (
      <div>
        <Button onClick={this.responseGoogle}> Checking Rediect </Button>
        <GoogleLogin
          clientId="145357618808-oe16u8u6afq634lg3790cv0jkn9066kq.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        ,
        <div>
          <GoogleLogout
            clientId="145357618808-oe16u8u6afq634lg3790cv0jkn9066kq.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={this.logout}
          ></GoogleLogout>
        </div>
      </div>
    );
  }
}

export default Google;
