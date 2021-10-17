import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import './style.css';

// firebase Import
import {logOutUser, verificaSeUsuarioEstaLogado, auth} from '../../Server/FirebaseConfig'
import { onAuthStateChanged } from '@firebase/auth';

//Widgets Import
import Header from '../../Widget/Header';
import Enter from '../../Widget/Enter';



function Intro(){

  const history = useHistory()            
  const [isLog, setIsLog] = useState(false)     
  useEffect(async ()=>{
      
      // Verifica se o Usuario esta deslogado
      onAuthStateChanged(auth, (user) =>{
          if(user){
              setIsLog(true)
          }else{
              setIsLog(false)
          }
      })
      if (isLog===true){
          history.push('/home')
      }       
  },[isLog])

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