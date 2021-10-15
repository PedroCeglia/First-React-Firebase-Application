import React from 'react';
import './App.css';

// firebase Import
import {verificaSeUsuarioEstaLogado, logoutUser} from './Widget/Firebase'

//Widgets Import
import Login from './Widget/Login';
import Cadastro from './Widget/Cadastro';


function App() {
  return (
    <div className="App">
      <h1>Hello Word</h1>
      <button onClick={verificaSeUsuarioEstaLogado}>Clique e vera</button>
      <Login/>
      <button onClick={logoutUser}>Sair</button>
      <Cadastro/>
    </div>
  );
}
export default App;
