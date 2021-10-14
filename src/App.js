import React from 'react';
import './App.css';
import app, {x} from './Widget/Firebase'

function App() {
  return (
    <div className="App">
      <h1>Hello Word</h1>
      <a onClick={x}>Clique e vera</a>
    </div>
  );
}
export default App;
