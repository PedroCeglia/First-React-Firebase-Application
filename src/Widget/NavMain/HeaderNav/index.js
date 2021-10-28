import React, {useState} from "react";
import { useEffect } from 'react/cjs/react.development'
import './style.css'
import { useHistory } from "react-router";

// Import Widgets
import MenuIcon from "../../MenuIcon";

// Import Firebase
import { database, auth, logOutUser } from "../../../Server/FirebaseConfig";
import { get, ref, onChildChanged } from '@firebase/database'

export default function HeaderNav(){

    let history = useHistory()

    const [userAuthId, setUserAuthId] = useState('')
    let dataRef = ref(database, `usuarios/${userAuthId}`)

    // Propriedades para alterarmos dados do usuario
    let changesUser = 0
    const [userChange, setUserChange] = useState(changesUser)
    const [srcPerfilImage, setSrcPerfilImage] = useState('assets/perfil.png')
    

    // Use State Verify User Log
    useEffect(()=>{
        if (auth.currentUser != null) {
            setUserAuthId(auth.currentUser.uid)
        } else{
            setUserAuthId('')
        }
    }, [auth.currentUser])
    
    // Get DataUser From Database
    useEffect(()=>{
        get(dataRef).then((snapshot)=>{
            if(snapshot.exists()){
                let usuario = snapshot.val()
                if(usuario.foto !== null && usuario.foto !== undefined){
                    setSrcPerfilImage(usuario.foto)
                }
            }
        })
    },[userChange, userAuthId])
    // Call Listener to check User Data
    useEffect(()=>{
        onChildChanged(dataRef, (data) => {
            
            changesUser++
            setUserChange(changesUser)
        });
    },[userAuthId])

    function sair(){
        logOutUser()
    }
    function otherPerfilToggle(){
        let other = document.querySelector('.other')
        let perfil = document.querySelector('.perfil.container-config')
        let perfilBody = document.querySelector('.body-perfil-menu-icon')
        perfilBody.classList.toggle('active')
        other.classList.toggle('active')
        perfil.classList.toggle('active')
    }
    function otherContatosToggle(){
        let other = document.querySelector('.other')
        let contatos = document.querySelector('.contatos.container-config')
        other.classList.toggle('active')
        contatos.classList.toggle('active')
    }

    let listaFunctionMenu =[
        {key:1, name:'Sair', voidOnClick: sair},
        {key:2, name:'Perfi', voidOnClick: otherPerfilToggle}
    ]
    function handleMenuIcon(){
        let menu = document.querySelector('.icon-menu-query')
        menu.classList.toggle('disable')
    }
      
    return(
        <div className='conteiner-header-nav'>
            <div className='main-header-nav'>
                <img src={srcPerfilImage} alt='Sua Foto De Perfil'/>
                <div className='icons-header-nav'>
                    <img src='assets/circle.png' alt='Status Icon' title='Status'/>        
                    <img src='assets/conversando.png' alt='Criar Nova Conversa Icon' title='Nova Conversa'
                        onClick={otherContatosToggle}/>
                    <div>
                        <img onClick={handleMenuIcon} className='icon-menu-query disable' src='assets/menu.png' alt='Menu Conversa Icon' title='Menu'/>
                        <MenuIcon listaMenus={listaFunctionMenu}/>
                    </div>
                
                </div>                     
            </div> 
                       
        </div>

    )
}