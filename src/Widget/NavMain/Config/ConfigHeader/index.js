import React from 'react'
import './style.css'

export default function ConfigHeader(props){
    function otherToggle(){
        props.togglers()
    }
    return(
        <div className='cabecalho-menu-icon'>
            <img src='assets/back.png' alt='Back Icon' title='Voltar'
                onClick={otherToggle}
            />
            <span>{props.name}</span>
        </div>
    )
} 