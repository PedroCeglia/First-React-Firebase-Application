import React, { useEffect, useState } from "react";
import './style.css'

// Import Widgets
import ChatIcon from "./ChatIcon";
import ContentMain from "../../ContentMain";


// Import Firebase
import { auth, database } from "../../../Server/FirebaseConfig";
import {ref, onValue} from "firebase/database";



export default function NavNav(props){
    // Recuperando Id Do Usuario Atual
    let userId
    if(auth.currentUser != null)
        userId = auth.currentUser.uid
    const usuariosRef = ref(database, `conversas/${userId}`)


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
    const [idDestinatarioEscolhidos, setIdDestinatarioEscolhidos] = useState()
    


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
                       //listaNovaUsuarios.push(childSnapshot.val())
                        listaNovaIdUsuarios.push(childSnapshot.key)
                        listaNovaUsuarios.push({
                            key:childSnapshot.key,
                            value:childSnapshot.val()
                        })
                    }
                })
                setListaUsuario(listaNovaUsuarios.sort(ordenarTempoMensagem))
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
                if(usuario.value.usuarioExibicao.nome.indexOf(inputText)>=0){
                    listaNovaFilter.push(usuario)
                    listaNovaIdFilter.push(usuario.key)
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
        setIdDestinatarioEscolhidos(idDestinatario)
    }

    // Ordenando Lista a partir da ultima mensagem
    function ordenarTempoMensagem(a, b){
        return parseInt(b.value.time) - parseInt(a.value.time) 
    }

    return (
        <div className='nav-nav-first'>
            <div className='nav-nav'>
                <div className='search-chat'>
                    <img src='assets/search.png' alt='Search Icon' title='Search Chat'/>
                    <input type='text' placeholder='Search a Chat'
                        value={inputText} onChange={text => {setInputText(text.target.value)}} />
                </div>
                <div className='chat-list'>
                    {
                        listaUsuarioFilter.map((user, x)=>{
                            let srcImg
                            if(user.value.usuarioExibicao.foto!=null){
                                srcImg = user.value.usuarioExibicao.foto
                            } else{
                                srcImg='assets/perfil.png'
                            }
                            return(
                                <ChatIcon
                                    key={x}
                                    name = {user.value.usuarioExibicao.nome}
                                    imgSrc = {srcImg}
                                    idDestinatario={user.key}
                                    handleClick={handleChatIcon}
                                    ultimaMensagem={user.value.ultimaMensagem}
                                    description={null}  
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