import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Line from'./Line';
import Header from './Header';
const gridStyle = {
 position:'relative',
 margin:'15px'
};
class App extends Component {
  
  render() {
    return (
      <div style = {gridStyle}>
        <Header text = 'Hey' fontSize = '30px'/>
        <Header text = 'Cool' fontSize = '15px'/>
        <Header text = 'Hey' fontSize = '15px'/>
        <Line height='48px' width='3px' top='37px' left='3px' color='#006699'/>
        <Line height = '38px' width = '3px' top='93px' left='3px' color='#006699'/>
      </div>
    );
  }
}

export default App;
