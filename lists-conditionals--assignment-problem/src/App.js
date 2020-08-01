import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    fieldValue: '',
    textLength: 0,
    chars: []
  }

  fieldValueChanged = (event) => {
    const newValue = event.target.value;
    const newLength = newValue.length;

    // console.log(newLength)
    this.setState({
      textLength: newLength,
      fieldValue: newValue,
      chars: newValue.split('')
    })
  }

  deleteCharacterHandler = (charIndex) => {
    /** here you are copying this.state.persons using spread operator ... */
    const newChars = [...this.state.chars];
    newChars.splice(charIndex, 1);
    const updatedText = newChars.join('');
    this.setState({ 
      chars: newChars , 
      fieldValue : updatedText
    })
  }



  render() {


    // let charComponents = ( chars.map(c => {
    //    return <CharComponent onechar= 'X'/> 
    // })

    let charComponents = (
      <div>
        {
          this.state.chars.map((c, index) => {
            return <CharComponent
              onechar={c}
              key={index}
              click={() => this.deleteCharacterHandler(index)}
            />
          }
          )
        }
      </div>
    )

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <div>
          <input type='text' 
          value={this.state.fieldValue} 
          onChange={(event) => this.fieldValueChanged(event)} />
          <ValidationComponent textLength={this.state.textLength} />
          {charComponents}         
        </div>
      </div>

    );
  }
}

export default App;
