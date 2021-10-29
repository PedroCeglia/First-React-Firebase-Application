import React, { useEffect, useState } from "react";
import './style.css'
//'assets/perfil.png' 
export default function ChatIcon(props){
    function handleClick2(){
        props.handleClick(props.idDestinatario)
    }

    let listType =`other-data-chat ${props.type}`

    const [abaixoNome, setAbaixoNome] = useState("")
    useEffect(()=>{
        if(props.ultimaMensagem != null){
            setAbaixoNome(props.ultimaMensagem)
        }else if(props.description != null){
            setAbaixoNome(props.description)
        } else{
            setAbaixoNome('Algo de errado Não Esta certo')
        }        
    })

    return(
        <div className='chat-item' onClick={handleClick2}>
            <div className='perfil-data'>
                <img className='perfil' 
                    src={props.imgSrc} 
                    alt='Friend User Perfil Photo'
                />
                <div className='user-data-chat'>
                    <h4>{props.name}</h4>
                    <span>{abaixoNome}</span>
                </div>                
            </div>
            <div className={listType}>
                <span>18:50</span>
                <div className='notify-chat'>
                    <img src='assets/mute.png' alt='Mute Icon'/>
                    <div className='mensages-number-chat'><span>0</span></div>
                    <img src='assets/down-arrow.png' alt='Open Chat Menu Icon'/>
                </div>
            </div>
        </div>
    )
}