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

        // lista de usuarios Filter 
        const [listaUsuarioFilter, setListaUsuarioFilter] = useState([])
        // lista de id dos usuarios Filter
        const [listaIdUsuarioFilter, setListaIdUsuarioFilter] = useState([])
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
        
        // Input Text SearchView
        const [inputText, setInputText] = useState("")

        // Muda a lista de Usuarios
        useEffect(()=>{
            if(inputText.length>=1){
                let listaNovaFilter = []
                let listaNovaIdFilter = []
                listaUsuario.filter((usuario, x) => {
                    if(usuario.nome.indexOf(inputText)>=0){
                        listaNovaFilter.push(usuario)
                        listaNovaIdFilter.push(listaIdUsuario[x])
                        console.log(x)
                    }
    
                })
                if(listaNovaFilter.length==0){
                    setListaUsuarioFilter([])
                    setListaIdUsuarioFilter([]) 
                } else{
                    setListaUsuarioFilter(listaNovaFilter)
                    setListaIdUsuarioFilter(listaNovaIdFilter) 
                }
            } else{
                setListaUsuarioFilter(listaUsuario)
                setListaIdUsuarioFilter(listaIdUsuario)
            }
        },[inputText, listaIdUsuario, listaUsuario])

        // OnClick Chat Icon
        function handleChatIcon(idDestinatario){
            props.setContatoUserId(idDestinatario)
        }

    return(
        <div className='nav-nav contato-nav'>
            <div className='search-chat'>
                <img src='assets/search.png' alt='Search Icon' title='Search Chat'/>
                <input type='text' placeholder='Search a Chat'
                    value={inputText} onChange={text =>{setInputText(text.target.value)}}/>
            </div>
            <div className='chat-list'>
                {
                    listaUsuarioFilter.map((user, x)=>{
                        let idUsuarioChatIcon = listaIdUsuarioFilter[x]
                        let srcImg
                        if(user.foto!=null){
                            srcImg = user.foto
                        } else{
                            srcImg='assets/perfil.png'
                        }
                        return(
                            <ChatIcon
                                key={x}
                                name = {user.nome}
                                imgSrc = {srcImg}
                                type ='none'
                                idDestinatario={idUsuarioChatIcon}
                                handleClick={handleChatIcon}  
                                ultimaMensagem={null}
                                description={user.descricao} 
                            />                            
                        )
                    })
                }   
                
            </div>
        </div>
    )
}