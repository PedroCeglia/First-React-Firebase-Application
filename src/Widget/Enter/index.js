import React from 'react'

import Login from './Login'
import Cadastro from './Cadastro'
import './style.css'

export default function Enter(){
    function changeToSingIn(){
        let singIn = document.querySelector(".content-singIn")
        let background = document.querySelector(".content-background")
        singIn.classList.add("active")
        background.classList.add("active")
    }
    function changeToLogIn(){
        let singIn = document.querySelector(".content-singIn")
        let background = document.querySelector(".content-background")
        singIn.classList.remove("active")
        background.classList.remove("active")
    }

    return(
        <div className='container-enter-main'>
            <div className='container-enter-content'>
                <div className='content-logIn'>
                    <Login change={changeToSingIn}/>
                </div>
                <div className='content-background'></div>
                <div className='content-singIn'>
                    <Cadastro change={changeToLogIn}/>
                </div>
            </div>            
        </div>

    )
}