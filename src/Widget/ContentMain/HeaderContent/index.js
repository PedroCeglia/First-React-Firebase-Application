import React from "react";
import './style.css'

export default function HeaderContent(){
    return(
        <div className='main-header-content'>          
            <div className='user-date-content'>
                <img src='assets/perfil.png' alt="Foto de Perfil Usuario Amigo"/>
                <div>
                    <h3>Nome Usuario</h3>
                    <span>Visto por ultimo</span>
                </div>
            </div>
            <div className='icons-header-content'>
                <img src='assets/search.png' alt='Icon Seacrh'/>
                <img src='assets/menu.png' alt='Icon Open Config'/>
            </div>
        </div>
    )
}