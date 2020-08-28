import React from 'react';
import './App.css';
import landing from './landing.js';
import adopt from './adopt';
import { Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <header className='appHeader'>
          <Link to='/'><h1>Petful</h1></Link>
          <Route exact path='/' component={landing} />
          <Route path='/adopt' component={adopt} />
        </header>
      </div>
    );
  }
}

export default App;
