import React, { Component } from 'react';
import ChartA from './components/chart';
import Tree1 from './components/tree'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ChartA/>
        <Tree1/>
      </div>
    );
  }
}

export default App;
