import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from '../src/assets/haydane.JPG';
import './App.css';

// class based components
function SetImage(props)
{
  return (<img src={props.image} className="App-logo" alt="logo" />);
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SetImage image={logo} /><br/>
          <SetLink link={'http://www.fb.com/hay.dane.7'} title={'Hay Dane'} />
        </header>
      </div>
    );
  }
}

export default App;
