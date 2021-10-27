import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import './style.css'

// Import Firebase 
import { onAuthStateChanged } from "@firebase/auth";
import { auth} from "../../Server/FirebaseConfig";

// Import Widgets
import NavMain from "../../Widget/NavMain"

export default function Home(){
    
    const history = useHistory()   
    useEffect(()=>{
        // Verifica se o Usuario esta deslogado
        onAuthStateChanged(auth, (user) =>{
            if(user){}else{history.push('/')}
        })     
    },[])
    
    return(
        <div className="home-main">
            <NavMain/>
        </div>
    )
}