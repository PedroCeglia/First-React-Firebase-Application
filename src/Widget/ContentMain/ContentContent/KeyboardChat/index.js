import React, { useState } from "react";
import './style.css'

// Import Firebase
import { auth, enviandoMensagemDatabase } from "../../../../Server/FirebaseConfig";

export default function KeyboardChat(props){
    // User Datas
    let user = auth.currentUser
    let userIdDestinatario = props.userIdDestinatario

    // Use State
    const [mensageText, setMensageText] = useState("")
    
    function enviar(){
        if(mensageText.lenght>1)
        console.log(mensageText)
            enviandoMensagemDatabase(user, userIdDestinatario, mensageText )
            setMensageText("")
    }
    return(
        <div className='keyboard-chat'>
            <img src='assets/emoji.png' alt='Emoji Icon' title='Emoji'/>
            <img src='assets/clip.png' alt='Attachment Icon' title='Attachment'/>
            <input value={mensageText} onChange={text => setMensageText(text.target.value)} type='text'/>
            <img src='assets/send.png' onClick={enviar}/>
        </div>
    )
}