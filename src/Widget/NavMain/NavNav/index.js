import React, { useEffect, useState } from "react";
import './style.css'

// Import Widgets
import ChatIcon from "./ChatIcon";


// Import Firebase
import { auth, database } from "../../../Server/FirebaseConfig";
import {ref, onValue} from "firebase/database";
/*
const db = getDatabase();
const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(dbRef, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    // ...
  });
}, {
  onlyOnce: true
});
*/ 

export default function NavNav(){
    let userId = auth.currentUser.uid

    const [listaUsuario, setListaUsuario] = useState([])
    useEffect(()=>{
        let listaNovaUsuarios = []
        const usuariosRef = ref(database, 'usuarios')
        onValue(usuariosRef, (snapshot) => {
            snapshot.forEach((childSnapshot) =>{
                const childKey = childSnapshot.key
                if(userId !== childKey ){
                    listaNovaUsuarios.push(childSnapshot.val())
                }
            })
            setListaUsuario(listaNovaUsuarios)
        })        
    },[])
    useEffect(()=>{
        console.log(listaUsuario)
    },[listaUsuario])


    return (
        <div className='nav-nav'>
            <div className='search-chat'>
                <img src='assets/search.png' alt='Search Icon' title='Search Chat'/>
                <input type='text' placeholder='Search a Chat'/>
            </div>
            <div className='chat-list'>
                {
                    listaUsuario.map((user)=>{
                        let srcImg
                        if(user.foto!=null){
                            srcImg = user.foto
                        } else{
                            srcImg='assets/perfil.png'
                        }
                        return(
                            <ChatIcon
                                name = {user.nome}
                                imgSrc = {srcImg}  
                            />                            
                        )
                    })

                }   
                
            </div>
        </div>
    )
}