import React from "react";
import './style.css'

export default function HeaderNav(){
    return(
        <div className='main-header-nav'>
            <img src='assets/perfil.png' alt='Sua Foto De Perfil'/>
            <div className='icons-header-nav'>
                <img src='assets/circle.png' alt='Status' title='Status'/>        
                <img src='assets/conversando.png' alt='Criar Nova Conversa' title='Nova Conversa'/>
                <img src='assets/search.png' alt='Buscar Conversa' title='Pesquisa'/>
            </div>
        </div>
    )
}