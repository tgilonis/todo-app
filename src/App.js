import React, { Component } from 'react';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/learning-examples/counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
      
    );
  }
}

function LearningComponents() {
  return (
    <div className="learningComponents">
        My Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>        
      </div>
  )
}

export default App;