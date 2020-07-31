import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOuput/UserOutput'

class App extends Component {

  state = {
    userNames : [
      'User1', 'User2'
    ]
  }

  changeUserNames = (firstNewName) =>{
   this.setState(
     {
      userNames : [
        firstNewName, 'User4'
      ]
     }
   )
  }

  field1ChangeHandler = (event) => {
    this.setState(
      {
       userNames : [
         'User 3', event.target.value
       ]
      }
    )

  }

  render() {

    const myButtonStyle = {
      backgroundColor: 'yellow',
      color : 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    const myInputFieldStyle = {
      textAlign: 'center' 
    }

    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>

        <UserInput name ={this.state.userNames[0]}
        style={myInputFieldStyle}
        changed={this.field1ChangeHandler}/>
        <UserOutput userName={this.state.userNames[0]}/>
        <UserOutput userName={this.state.userNames[1]}/>
        <button
        style = {myButtonStyle}
         onClick={() => this.changeUserNames('User onClick')}>change userNames</button>
      </div>
    );
  }
}

export default App;
