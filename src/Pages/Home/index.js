import React, { useEffect, useState } from "react";
import Header from "../../Widget/Header";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "@firebase/auth";
import { auth,verificaSeUsuarioEstaLogado, logOutUser } from "../../Server/FirebaseConfig";
import { useHistory } from "react-router";

export default function Home(){
    
    const history = useHistory() 
    const [isLog, setIsLog] = useState(false)     
    useEffect(async ()=>{

        // Verifica se o Usuario esta deslogado
        onAuthStateChanged(auth, (user) =>{
            if(user){
                setIsLog(false)
            }else{
                setIsLog(true)
            }
        })
        if (isLog===true){
            history.push('/')
        }       
    },[isLog])
    
    return(
        <div>
            <Header/>
            <button onClick={verificaSeUsuarioEstaLogado}>Clique e veja</button>
            <button onClick={logOutUser}>Clique e saia</button>
            <Link to='/'>voltar</Link>
        </div>
    )
}