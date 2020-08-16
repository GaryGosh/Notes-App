import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import SearchNote from './Components/SearchNote';
import CreateNote from './Components/CreateNote';

class App extends Component{

  state = {
    notes: [
      {text: 'note1', id: 1},
      {text: 'note2', id: 2},
      {text: 'note3', id: 3}
    ]
  }

  

  render() {
    return (
      <div className="app">
        <Header />
        <SearchNote />
        <CreateNote />
        {/* Note */}
      </div>
    );
  }
 
}

export default App;
