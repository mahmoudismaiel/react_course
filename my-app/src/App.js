import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {

    persons: [
      { name: "Rose", age: 35 },
      { name: "Roaa", age: 7 },
      { name: "Rital", age: 1 }
    ],
    otherState: "some Other Value",
    buttonName: 'Show Persons',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('was Clicked');
    //window.alert('was Clicked');
    // DO NOT USE THIS:  this.state.persons[0].name = "Rose Mohamed";
    this.setState({
      persons: [
        { name: newName, age: 35 },
        { name: 'Roaa', age: 7 },
        { name: 'Rital', age: 0.75 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    //console.log('was Clicked');
    //window.alert('was Clicked');
    // DO NOT USE THIS:  this.state.persons[0].name = "Rose Mohamed";
    this.setState({
      persons: [

        { name: 'Rose', age: 35 },
        { name: event.target.value, age: 7 },
        { name: 'Rital', age: 0.75 }
      ]
    })
  }

  togglePersonHandler = () => {
    this.setState({

      showPersons: !this.state.showPersons,
      buttonName : this.state.showPersons ? 'Show Persons': 'Hide persons'
    })

  }


  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      width: '20%',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };



    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p> This is really working!!</p>
        <button
          style={buttonStyle}
          onClick={this.togglePersonHandler}>{this.state.buttonName}</button>
        {this.state.showPersons ===true ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Rose 2')}
              changed={this.nameChangedHandler}> My hobbie: reading</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div> : null
        }
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m React App!!!'));
  }
}

export default App;
