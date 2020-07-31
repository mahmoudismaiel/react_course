import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

 state = {

  persons : [

    { name:"Rose", age:35},
    { name:"Roaa", age:7},
    { name:"Rital", age:1}
  ],
  otherState : "some Other Value"
 }

 switchNameHandler = () => {
  //console.log('was Clicked');
  //window.alert('was Clicked');
  // DO NOT USE THIS:  this.state.persons[0].name = "Rose Mohamed";
  this.setState({persons : [

    { name:"Rose Mohamed", age:35},
    { name:"Roaa", age:7},
    { name:"Rital", age:0.75}
  ]
});

 }
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p> This is really working!!</p>
        <button onClick={this.switchNameHandler}>switch Person</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbie: reading</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m React App!!!'));
  }
}

export default App;
