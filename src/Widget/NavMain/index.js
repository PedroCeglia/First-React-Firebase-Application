import React from "react";
import './style.css'

// Import Widgets
import HeaderNav from "./HeaderNav";
import NavNav from "./NavNav";

export default function NavMain(){
    return(
        <div className='container-main'>
            <div className='container-main-main'>
                <HeaderNav/>
                <NavNav/>                
            </div>
            <div className='other active'>
                <div className='perfil active'>
                    <div className='cabecalho-menu-icon'>
                        <img src='assets/menu.png' alt='Back Icon' title='Voltar'/>
                        <span>Perfil</span>
                    </div>
                    <div className='body-perfil-menu-icon'>
                        <div className='foto-perfil'>
                            <div className='content'></div>
                            <img src='assets/perfil.png' alt='Perfil Photo'/>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}