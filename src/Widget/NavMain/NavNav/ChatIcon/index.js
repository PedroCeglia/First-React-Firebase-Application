import React, { useEffect, useState } from "react";
import './style.css'
//'assets/perfil.png' 
export default function ChatIcon(props){
    function handleClick2(){
        props.handleClick(props.idDestinatario)
    }

    let listType =`other-data-chat ${props.type}`

    // Config Descrição ou Ultima Mensagem
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

    // Config Notificações
    const [classNotify, setClassNotify] = useState('mensages-number-chat disable')
    useEffect(()=>{
            if(props.qnts != 0 && props.qnts != null){
                setClassNotify('mensages-number-chat')
            } else {
                setClassNotify('mensages-number-chat disable')
            }
    }, [props.qnts])

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
                    <div className={classNotify}><span>{props.qnts}</span></div>
                    <img src='assets/down-arrow.png' alt='Open Chat Menu Icon'/>
                </div>
            </div>
        </div>
    )
}