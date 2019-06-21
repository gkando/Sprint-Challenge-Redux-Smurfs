import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import NavBar from './NavBar';



/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">

        <div className='village'>

          <img src=
                {require("../images/house1.png")} 
                alt="smurf-house" 
          /> 

        </div>

        <h1>Smurf Village</h1>
        <NavBar />

        <Route
              exact 
              path='/'
              component={Smurfs}
          />

        <Route
              exact
              path="/:id"
              component={SmurfForm}
             />

      </div>
    );
  }
}

export default App;