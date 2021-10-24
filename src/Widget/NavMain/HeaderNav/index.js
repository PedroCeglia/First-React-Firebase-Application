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
    let dataRef = ref(database, `usuarios/${auth.currentUser.uid}`)

    // Propriedades para alterarmos dados do usuario
    let changesUser = 0
    const [userChange, setUserChange] = useState(changesUser)
    const [srcPerfilImage, setSrcPerfilImage] = useState('assets/perfil.png')
    


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
    },[userChange])
    // Call Listener to check User Data
    useEffect(()=>{
        onChildChanged(dataRef, (data) => {
            
            changesUser++
            setUserChange(changesUser)
            /*
            setSrcImage(data.val())
            // data.val() retorna oque foi modificado
            // no caso só a foto
            // porem pode retornar uma lista 8*/
        });
    })

    function sair(){
        logOutUser()
        history.push('/')
    }
    function otherToggle(){
        let other = document.querySelector('.other')
        other.classList.toggle('active')
    }

    let listaFunctionMenu =[
        {key:1, name:'Sair', voidOnClick: sair},
        {key:2, name:'Perfi', voidOnClick: otherToggle}
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
                    <img src='assets/conversando.png' alt='Criar Nova Conversa Icon' title='Nova Conversa'/>
                    <div>
                        <img onClick={handleMenuIcon} className='icon-menu-query disable' src='assets/menu.png' alt='Menu Conversa Icon' title='Menu'/>
                        <MenuIcon listaMenus={listaFunctionMenu}/>
                    </div>
                
                </div>                     
            </div> 
                       
        </div>

    )
}