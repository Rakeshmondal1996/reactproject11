import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Google extends Component { 
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }
  
    responseGoogle = (response) => 
    {
       
      let path = `/Home`;
      this.props.history.push(path);
        alert("Hi Bunty you have successfully Login");
        
     console.log(response);
     console.log(response.profileobj);
     this.props. history.push('/Home')
    //  
     
   // <Home/>
    
    
    
  
   }
  
    render() {
        return (
            <div>
                
                
           <GoogleLogin
            clientId="145357618808-oe16u8u6afq634lg3790cv0jkn9066kq.apps.googleusercontent.com"
              buttonText="Login"
             onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
           
          
    
            />,
           
          
          <div>
          <GoogleLogout
            clientId="145357618808-oe16u8u6afq634lg3790cv0jkn9066kq.apps.googleusercontent.com"
            buttonText="Logout"
           onLogoutSuccess={this.logout}
    >
     </GoogleLogout>
   

          </div>

            </div>
        );
    }
}


export default withRouter(Google);