import React, { Component } from 'react';

class Home extends Component {
     activateLasers =(event)=>{
     
        //const item = this.state.item;
      
  
         fetch(`/api/expenses`, {
          method : 'POST',
          headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body : JSON.stringify("rakesh"),
        });
        
        event.preventDefault();
       // this.props.history.push("/expenses");
      }

    render() {
       
        return (
            <div>
                <button onClick={this.activateLasers}>
  clickhere to check api
</button>
            </div>
        );
    }
}

export default Home;