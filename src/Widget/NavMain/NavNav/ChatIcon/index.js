import React from "react";
import './style.css'

export default function ChatIcon(){
    return(
        <div className='chat-item'>
            <div className='perfil-data'>
                <img className='perfil' 
                    src='assets/perfil.png' 
                    alt='Friend User Perfil Photo'
                />
                <div className='user-data-chat'>
                    <h4>User Name</h4>
                    <span>last mensage</span>
                </div>                
            </div>
            <div className='other-data-chat'>
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