import React, { Component } from 'react';
import Radium, { StyleRoot } from "radium";
//StyleRoot is to enable using Media queries
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {

    persons: [
      { id: '432', name: "Rose", age: 35 },
      { id: '122', name: "Roaa", age: 7 },
      { id: '1asd', name: "Rital", age: 1 }
    ],
    otherState: "some Other Value",
    buttonName: 'Show Persons',
    showPersons: false
  }


  nameChangedHandler = (event, id) => {
    //this arrow function is executed over each element of the array
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //spread the element we need to mutate
    //old javascript way
    //const person = Object.assign({},this.state.persons[personIndex]);
    //Modern ES6 way
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const newPersons = [...this.state.persons];
    newPersons[personIndex] = person;

    this.setState({ persons: newPersons })

  }

  deletePersonHandler = (personIndex) => {
    /** here you will delete the Original value of this.state.persons */
    //const newPersons = this.state.persons;
    /** here you are copying this.state.persons using spread operator ... */
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({ persons: newPersons })

  }

  togglePersonHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({

      // showPersons: !this.state.showPersons,
      showPersons: !doesShow,
      buttonName: doesShow ? 'Show Persons' : 'Hide persons'
    })

  }


  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      width: '20%',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null

    if (this.state.showPersons) {

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}

        </div>
      )

      buttonStyle.backgroundColor = 'red';
      buttonStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    //let classes = ['red', 'bold'].join(' '); //e.g "red bold"

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      <StyleRoot>
      <div className="App" >
        <h1>Hi I'm a React App</h1>
        <p className={classes.join(' ')}> This is really working!!</p>
        <button
          style={buttonStyle}
          onClick={this.togglePersonHandler}>{this.state.buttonName}</button>
        {persons}
      </div>
      </StyleRoot>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I\'m React App!!!'));
  }
}

export default Radium(App);
