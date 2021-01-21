import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
// import Bootstrappj from './component1/Bootstrappj';
// import Landing from './component1/Landing';
import SpaceX from './spacex/SpaceX';
import Login from './component1/Login'
import Registration from './component1/Registration';
class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        {/* <Bootstrappj/> */}
        {/* <Landing />  */}
       {/* <Login/> */}
       {/* <SpaceX/> */}
       <Registration/>
      </div>

    )
  }
}

export default App;
