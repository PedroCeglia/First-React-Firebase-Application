import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import './style.css'

// Import Firebase 
import { onAuthStateChanged } from "@firebase/auth";
import { auth, logOutUser } from "../../Server/FirebaseConfig";

// Import Widgets
import ContentMain from "../../Widget/ContentMain";
import NavMain from "../../Widget/NavMain"

export default function Home(){
    
    const history = useHistory() 
    const [isLog, setIsLog] = useState(false)     
    useEffect(async ()=>{

        // Verifica se o Usuario esta deslogado
        await onAuthStateChanged(auth, (user) =>{
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
        <div className="home-main">
            <NavMain/>
            <ContentMain/>
        </div>
    )
}