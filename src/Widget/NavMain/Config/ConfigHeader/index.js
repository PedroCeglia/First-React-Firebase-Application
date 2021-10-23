import React from 'react'

export default function ConfigHeader(props){
    function otherToggle(){
        let other = document.querySelector('.other')
        other.classList.toggle('active')
    }
    return(
        <div className='cabecalho-menu-icon'>
            <img src='assets/back.png' alt='Back Icon' title='Voltar'
                onClick={otherToggle}
            />
            <span>Perfil</span>
        </div>
    )
}