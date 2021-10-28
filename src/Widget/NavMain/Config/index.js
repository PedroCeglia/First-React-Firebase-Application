import React from 'react'
import './style.css'

// Import Widget
import ConfigHeader from './ConfigHeader'
import ConfigBody from './ConfigBody'

export default function Config(){
    
    function perfilToggler(){
        let other = document.querySelector('.other')
        let perfil = document.querySelector('.perfil.container-config')
        let perfilBody = document.querySelector('.body-perfil-menu-icon')
        perfilBody.classList.toggle('active')
        other.classList.toggle('active')
        perfil.classList.toggle('active')
    }
    function contatosToggler(){
        let other = document.querySelector('.other')
        let contatos = document.querySelector('.contatos.container-config')
        other.classList.toggle('active')
        contatos.classList.toggle('active')
    }
    return(
        <div className='other'>
            <div className='container-config perfil'>
                <ConfigHeader
                    togglers={perfilToggler} 
                    name="Perfil"
                />
                <ConfigBody/>
            </div>
            <div className='container-config contatos'>
                <ConfigHeader
                    togglers={contatosToggler}
                    name="Contatos"
                />
                <ConfigBody/>
            </div>
        </div>
    )
}
