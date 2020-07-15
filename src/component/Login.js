import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
//import './Login.css'



import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class login extends Component {
    goog = () => {

    }
    render() {
        return (
            <div>
               


<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h4 text-center mb-4">Sign in</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Your password
        </label>
        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
        <div className="text-center mt-4">
          <MDBBtn color="indigo" type="submit">Login</MDBBtn>
          <div className="text-center mt-8">
          <MDBBtn color="indigo" type="submit" ><Link to="/Google">Google+</Link></MDBBtn>
          <MDBBtn color="indigo" type="submit">Linkedin</MDBBtn>
          </div>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);



            </div>



        );
    }
    
}

export default login;