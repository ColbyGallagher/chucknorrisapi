import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';

class App extends Component {
  constructor() {
    super()
    this.state = {
        joke: {},
       
    }
}

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(poo => this.setState({joke: poo}))
  }

  render() {
    const{ joke } = this.state;

    
      return (
          <div className ='tc'>
              <h1 className='f2'>Random Chuck Norris Joke</h1>
              <CardList joke={joke}/>
          </div>
      
      );
  
  }
  
    
    
  
}

export default App;
