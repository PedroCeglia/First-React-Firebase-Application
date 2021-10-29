import React, { useState, useEffect } from "react";
import './style.css'

// Import Firebase
import { auth, database, enviandoMensagemDatabase, criaConversa, setUltimaMensagem} from "../../../../Server/FirebaseConfig";
import { get, child, ref } from "@firebase/database"; 

export default function KeyboardChat(props){
    // User Datas
    //let user = auth.currentUser
    const [user, setUser] = useState(auth.currentUser)
    useEffect(()=>{
        if(auth.currentUser != null){
            setUser(auth.currentUser)
        }
    }, [auth.currentUser])

    // Config Database Ref
    const [idDestinatarioEscolhidos, setIdDestinatarioEscolhidos] = useState("") 
    const [userDestinatarioEscolhidos, setUserDestinatarioEscolhidos] = useState("") 

    useEffect(()=>{
        setIdDestinatarioEscolhidos(props.userIdDestinatario)
        setUserDestinatarioEscolhidos(props.userDestinatario)
    },[props.userIdDestinatario, props.userDestinatario])

    // Use State
    const [mensageText, setMensageText] = useState("")

    /* Configurando Conversas no DataBase*/
    function setConversas(){
        if(auth.currentUser != null){
            const contatosRef = ref(database, `conversas/${user.uid}/${idDestinatarioEscolhidos}`)
            get(contatosRef).then((snapshot) => {
                if (snapshot.exists()) {
                    setUltimaMensagem(user.uid, idDestinatarioEscolhidos, mensageText)
                } else {
                    criaConversa(user.uid, userDestinatarioEscolhidos, idDestinatarioEscolhidos, mensageText)
                }
                enviandoMensagemDatabase(user, idDestinatarioEscolhidos, mensageText)
            }).catch((error) => {
                console.error(error);
            });        
            
        }
    }
    
    function enviar(){
        if(mensageText.length >1){
           setConversas()
           setMensageText("")
        }
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