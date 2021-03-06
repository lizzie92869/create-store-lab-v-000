import React, { Component } from 'react';
import UserInput from './components/UserInput';
import Users from './components/Users';


export class App extends Component {

  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <Users store={this.props.store}/>
      </div>
    );
  }
};

export default App;
