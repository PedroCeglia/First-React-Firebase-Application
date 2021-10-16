import React from 'react';
import './style.css';

// firebase Import
import {logOutUser, verificaSeUsuarioEstaLogado} from '../../Server/FirebaseConfig'

//Widgets Import
import Header from '../../Widget/Header';
import Enter from '../../Widget/Enter';



function Intro(){

  return (
    <div className="App">
      <Header/>
      <button onClick={logOutUser}>Clique Sair</button>
      <button onClick={verificaSeUsuarioEstaLogado}>Clique e veja</button>
      <Enter/> 
      <div className='opa5city'>
             
      </div>
 
    </div>
  );
}
export default Intro;