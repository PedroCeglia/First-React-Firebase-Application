import React, { useEffect, useState } from "react";
import './style.css'

// Import Widgets
import ChatIcon from "./ChatIcon";
import ContentMain from "../../ContentMain";


// Import Firebase
import { auth, database } from "../../../Server/FirebaseConfig";
import {ref, onValue, onChildAdded} from "firebase/database";



export default function NavNav(props){
    // Recuperando Id Do Usuario Atual
    let userId
    if(auth.currentUser != null)
        userId = auth.currentUser.uid
    const usuariosRef = ref(database, `conversas/${userId}`)

    // Key List.map() = listaUsuario    
    let idUserKey = 0

    // UseStates 
    // lista de usuarios
    const [listaUsuario, setListaUsuario] = useState([])
    // lista de id dos usuarios
    const [listaIdUsuario, setListaIdUsuario] = useState([])
    // idDestinatario Escolhido
    const [idDestinatarioEscolhidos, setIdDestinatarioEscolhidos] = useState() 

    const [changeTest, setChangeTest] = useState(0)
    const [test, setTest] = useState(0)

    // Sera chamado se Um suario for escolhido pelos contatos
    useEffect(()=>{
        if(props.contatoUserId != null){
            setIdDestinatarioEscolhidos(props.contatoUserId)
        }
    },[props.contatoUserId])
   
    // Recuperando Lista de Usuarios
    useEffect(()=>{
        if(auth.currentUser != null){
            
            setListaUsuario(listaUsuario)
            setListaIdUsuario(listaIdUsuario)
            
            onValue(usuariosRef, (snapshot) => {
                let listaNovaUsuarios = []
                let listaNovaIdUsuarios = []
                snapshot.forEach((childSnapshot) =>{
                    const childKey = childSnapshot.key
                    if(userId !== childKey ){
                        listaNovaUsuarios.push(childSnapshot.val())
                        listaNovaIdUsuarios.push(childSnapshot.key)
                    }
                })
                setListaUsuario(listaNovaUsuarios)
                setListaIdUsuario(listaNovaIdUsuarios)
            })        
        }
    },[])


    // OnClick Chat Icon
    function handleChatIcon(idDestinatario){
        setIdDestinatarioEscolhidos(idDestinatario)
    }

    return (
        <div className='nav-nav-first'>
            <div className='nav-nav'>
                <div className='search-chat'>
                    <img src='assets/search.png' alt='Search Icon' title='Search Chat'/>
                    <input type='text' placeholder='Search a Chat'/>
                </div>
                <div className='chat-list'>
                    {
                        listaUsuario.map((user)=>{
                            let idUsuarioChatIcon = listaIdUsuario[idUserKey]
                            idUserKey++
                            let srcImg
                            if(user.usuarioExibicao.foto!=null){
                                srcImg = user.usuarioExibicao.foto
                            } else{
                                srcImg='assets/perfil.png'
                            }
                            return(
                                <ChatIcon
                                    key={idUserKey}
                                    name = {user.usuarioExibicao.nome}
                                    imgSrc = {srcImg}
                                    idDestinatario={idUsuarioChatIcon}
                                    handleClick={handleChatIcon}  
                                />                            
                            )
                        })
                    }   
                    
                </div>
            </div>
            <ContentMain
                idDestinatario={idDestinatarioEscolhidos} 
            />            
        </div>

    )
}