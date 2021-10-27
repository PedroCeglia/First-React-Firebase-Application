import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import './style.css';

// firebase Import
import {auth} from '../../Server/FirebaseConfig'
import { onAuthStateChanged } from '@firebase/auth';

//Widgets Import
import Header from '../../Widget/Header';
import Enter from '../../Widget/Enter';



function Intro(){

  const history = useHistory()             
  useEffect(async ()=>{
      // Verifica se o Usuario esta deslogado
      onAuthStateChanged(auth, (user) =>{
          if(user){
              history.push('/home')
            }
        }
      )
  },[])

  return (
    <div className="App">
      <Header/>
      <Enter/> 
    </div>
  );
}
export default Intro;