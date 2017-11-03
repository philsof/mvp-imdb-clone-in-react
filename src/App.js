import React, { Component } from 'react';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import 'normalize.css'
import Person from './components/Person'
import Search from './components/Search'

class App extends Component {
  constructor(){
    super()
    this.state = {result: {}}
    this.updateResult = this.updateResult.bind(this);
  }
  
  updateResult(newResult) {
    this.setState({result: newResult})
  }
  
  render() {
    return (
      <div>
        <Search onUpdate={this.updateResult}/>
        <Person data={JSON.stringify(this.state.result)}/>
      </div>
    );
  }
}

export default App;
