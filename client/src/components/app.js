import React, { Component } from 'react';
import Nav from '../containers/nav';
import List from '../containers/list';
import './app.css';

class App extends Component {
  render() {
    const { error } = this.props;
    return (
      <div className="app">
        <h1>People</h1>
        <Nav />
        {error ?
          <p>Sorry, an error accurred: {error}</p> :

          <List/>
        }
      </div>
  );
  }
}

export default App;
