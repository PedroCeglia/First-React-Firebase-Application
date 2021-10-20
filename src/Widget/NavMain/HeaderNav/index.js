import React from "react";
import './style.css'
import { useHistory } from "react-router";

// Import Widgets
import MenuIcon from "../../MenuIcon";

// Import Firebase
import { logOutUser } from "../../../Server/FirebaseConfig";


export default function HeaderNav(){

    let history = useHistory()
    

    function sair(){
        logOutUser()
        history.push('/')
    }

    let listaFunctionMenu =[
        {key:1, name:'Sair', voidOnClick: sair},
        {key:2, name:'Perfi', voidOnClick: null}
    ]
    function handleMenuIcon(){
        let menu = document.querySelector('.icon-menu-query')
        menu.classList.toggle('disable')
    }
      
    return(
        <div className='conteiner-header-nav'>
            <div className='main-header-nav'>
                <img src='assets/perfil.png' alt='Sua Foto De Perfil'/>
                <div className='icons-header-nav'>
                    <img src='assets/circle.png' alt='Status Icon' title='Status'/>        
                    <img src='assets/conversando.png' alt='Criar Nova Conversa Icon' title='Nova Conversa'/>
                    <div>
                        <img onClick={handleMenuIcon} className='icon-menu-query disable' src='assets/menu.png' alt='Menu Conversa Icon' title='Menu'/>
                        <MenuIcon listaMenus={listaFunctionMenu}/>
                    </div>
                
                </div>                     
            </div> 
                       
        </div>

    )
}