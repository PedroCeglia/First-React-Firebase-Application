import React, {useState, useEffect} from 'react'
import './style.css'

// Import Firebase
import {auth, database} from "../../../../../Server/FirebaseConfig"
import {ref, onValue} from "firebase/database";

// Import Widgets
import ChatIcon from '../../../NavNav/ChatIcon';



export default function ConfigContatos(props){

        // Recuperando Id Do Usuario Atual
        let userId
        if(auth.currentUser != null)
            userId = auth.currentUser.uid
        
        // Key List.map() = listaUsuario    
        let idUserKey = 0
    
        // UseStates 
        // lista de usuarios
        const [listaUsuario, setListaUsuario] = useState([])
        // lista de id dos usuarios
        const [listaIdUsuario, setListaIdUsuario] = useState([])
        // idDestinatario Escolhido
    
        // Recuperando Lista de Usuarios
        useEffect(()=>{
            if(auth.currentUser != null){
                let listaNovaUsuarios = []
                let listaNovaIdUsuarios = []
                const usuariosRef = ref(database, 'usuarios')
                onValue(usuariosRef, (snapshot) => {
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
            props.setContatoUserId(idDestinatario)
        }

    return(
        <div className='nav-nav contato-nav'>
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
                        if(user.foto!=null){
                            srcImg = user.foto
                        } else{
                            srcImg='assets/perfil.png'
                        }
                        return(
                            <ChatIcon
                                key={idUserKey}
                                name = {user.nome}
                                imgSrc = {srcImg}
                                type ='none'
                                idDestinatario={idUsuarioChatIcon}
                                handleClick={handleChatIcon}  
                            />                            
                        )
                    })
                }   
                
            </div>
        </div>
    )
}