import React, { useEffect, useState } from 'react'
import { logOutUser } from '../../Server/FirebaseConfig'
import './style.css'

export default function Header(){

    let isLog = true
    const [mensagem, setMensage] = useState("")
    const [headerFunction, setHeaderFunction] = useState()
    
    
    useEffect(()=>{
        /*if(isLog){
            setMensage("LogIn / SingIn")
            setHeaderFunction(logOutUser)
        }else{
            setMensage("Exit")
            setHeaderFunction(logOutUser)
        } */       
    },[])

    

    return(
        <header>
            <div className='header-logo'>
                <img src="./assets/whats-logo.svg"/>
                <span>WhatsApp</span>
            </div>
            <nav className='header-nav'>
                <ul>
                    <li><a href='#'>Donwload</a></li>
                    <li><a href='#'>WhatsApp Web</a></li>
                    <li><a href='#'>Documentation</a></li>
                    <li><a href='#'>Help</a></li>
                    
                </ul>
            </nav>
        </header>
    )
}