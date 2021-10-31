import React, { useState, useEffect } from "react";

import './style.css'

// Import Firebase
import { auth, database, enviandoMensagemDatabase, criaConversa, setUltimaMensagem, addMensageFoto, addMensageVideo} from "../../../../Server/FirebaseConfig";
import { get, ref } from "@firebase/database"; 

export default function KeyboardChat(props){
    // User Datas
    const [user, setUser] = useState(auth.currentUser)
    useEffect(()=>{
        if(auth.currentUser != null){
            setUser(auth.currentUser)
        }
    }, [auth.currentUser])

    // Config Database Ref
    const [idDestinatarioEscolhidos, setIdDestinatarioEscolhidos] = useState("") 
    const [userDestinatarioEscolhidos, setUserDestinatarioEscolhidos] = useState("") 

    // Recuperar IdDestinatario
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
    // Enviar Mensagens
    function enviarEnter(e){
        if(e.key == "Enter"){
            enviar()
        }
    }
    function enviar(){
        if(mensageText.length>=1){
           setConversas()
           setMensageText("")
        } else{ 
            alert("Digite Alguma Mensagem")
        }
    }
    function setFoto(src){
        console.log('antes')
        let tipoFile = src.target.files[0].type.split('/')
        switch(tipoFile[0]){
            case 'image':
                addMensageFoto(user, idDestinatarioEscolhidos, src.target.files[0])
                break;
            case 'video':
                addMensageVideo(user, idDestinatarioEscolhidos, src.target.files[0])
                break;    
        }
        
        console.log('depois')
    }
    return(
        <div className='keyboard-chat'>
            <img src='assets/emoji.png' alt='Emoji Icon' title='Emoji'/>
            <label htmlFor='imgKeyboard'><img src='assets/clip.png' alt='Attachment Icon' title='Attachment'/></label>
            <input type='file' id='imgKeyboard' className='none'
                onChange={setFoto}/>
            <input value={mensageText} onKeyPress={e =>{ enviarEnter(e)}} onChange={text => setMensageText(text.target.value)} type='text'/>
            <img src='assets/send.png' onClick={enviar}/>
        </div>
    )
}