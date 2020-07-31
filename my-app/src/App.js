import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p> This is really working!!</p>
        <Person name="Rose" age="35"/>
        <Person name="Roaa" age="7.5">My Hobbies: Reading</Person>
        <Person name="Rital" age="1"/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m React App!!!'));
  }
}

export default App;
