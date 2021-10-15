import React from 'react';
import './App.css';

// firebase Import
import {verificaSeUsuarioEstaLogado, logoutUser} from './Widget/Firebase'

//Widgets Import
import Enter from './Widget/Enter';


function App() {
  return (
    <div className="App">
      <h1>Hello Word</h1>
      <button onClick={verificaSeUsuarioEstaLogado}>Clique e vera</button>
      <button onClick={logoutUser}>Sair</button>
      <Enter/>
    </div>
  );
}
export default App;
