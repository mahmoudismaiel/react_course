//import React, { Component } from 'react';
// for using React Hooks to enable State for function-based components
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

//class App extends Component {
const app = props => {

  const [personsState, setPersonsState] =   useState({
    persons: [
      { name: 'Rose', age: 35 },
      { name: 'Roaa', age: 7 },
      { name: 'Rital', age: 1 }
    ]
  });

  const [otherState,setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('was Clicked');
    //window.alert('was Clicked');
    // DO NOT USE THIS:  this.state.persons[0].name = "Rose Mohamed";
    setPersonsState({
      persons: [
  
        { name: "Rose Mohamed", age: 35 },
        { name: "Roaa", age: 7 },
        { name: "Rital", age: 0.75 }
      ]
    });
  
  }

  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <p> This is really working!!</p>
      <button onClick={switchNameHandler}>switch Person</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My hobbie: reading</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;



