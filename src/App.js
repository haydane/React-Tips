import React, { Component } from 'react';
import logo from './logo.svg';
// import logo from '../src/assets/haydane.JPG';
import './App.css';

// class based components
function SetImage(props)
{
  return (
    <img src={props.image} className="App-logo" alt="logo" />
  );
}
function SetLink(props)
{
  return (
    <a
      className="App-link"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer">
      {props.title}
    </a>
  );
}


class App extends Component {
  state = 
  {
    message: 'Hi! Dane',
  }
  //use arrow function instead of bind
  logMessage = () =>
  {
    alert(this.state.message);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SetImage image={logo} />
          <SetLink link={'http://www.fb.com/hay.dane.7'} title={'Hay Dane'} /> <br/>
          <input type="button" value="Click Me" onClick={this.logMessage}/>
        </header>
      </div>
    );
  }
}

export default App;
