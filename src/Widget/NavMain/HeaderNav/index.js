import React from "react";
import './style.css'

export default function HeaderNav(){
    return(
        <div className='main-header-nav'>
            <img src='assets/perfil.png' alt='Sua Foto De Perfil'/>
            <div className='icons-header-nav'>
                <img src='assets/circle.png' alt='Status Icon' title='Status'/>        
                <img src='assets/conversando.png' alt='Criar Nova Conversa Icon' title='Nova Conversa'/>
                <img src='assets/menu.png' alt='Menu Conversa Icon' title='Pesquisa'/>
            </div>
        </div>
    )
}