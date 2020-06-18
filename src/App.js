import React, { useState, Component } from 'react';
import Raindrops from './Raindrops';

class App extends Component {

  constructor() {
    super();
    this.state = {
      index: 0,
      rainList: [],
    };
  }

  push = () => {
    const index = this.state.index + 1;
    const newList = this.state.rainList.concat({id: index})
    this.setState({ rainList: newList, index })
  }

  shift = () => {
    const newList = this.state.rainList;
    newList.shift();
    this.setState({ rainList: newList })
  }

  render(){
    return(
      <div className='App'
      
      style={{ 
        position: 'absolute', 
        width: '100%',
        height: '100%',
        }}

      >
        <button 
        style={{ 
          borderRadius: '50%',
          width: '100px',
          height: '100px',

          position: 'absolute', 
          left: '50%', 
          top: '50%',
          transform: 'translate(-50%, -50%)',

          }}
          onClick={this.push} >
          Push!!
        </button>
        <Raindrops rainList={this.state.rainList} shift={this.shift}  />
      </div>
    )
  }
}

export default App;