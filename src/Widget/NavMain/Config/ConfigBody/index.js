import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

// Import Firebase
import { auth, database, alterarNome} from '../../../../Server/FirebaseConfig'
import { get, ref } from '@firebase/database'

export default function ConfigBody(){
    let nome =auth.currentUser.displayName
    let descricao =""
    
    const [description, setDescription] = useState("")
    const [userName, setUserName] = useState(nome)
    const [userDescription, setUserDescription] = useState("")
    

    const [srcInputName, setSrcInputname] = useState('assets/pencil.png')
    const [srcInputDesc, setSrcInputDesc] = useState('assets/pencil.png')

    // Get DataUser From Database
    useEffect(()=>{
        get(ref(database, `usuarios/${auth.currentUser.uid}`)).then((snapshot)=>{
            if(snapshot.exists()){
                let usuario = snapshot.val()
                console.log(usuario)
                console.log(usuario.descricao)

                setDescription(usuario.descricao)
                setUserDescription(usuario.descricao)
            }
        })
    },[])

    // If Inputs Change
    useEffect(()=>{
        if(userDescription!= description){
            setSrcInputDesc('assets/check.png')
        } else{
            setSrcInputDesc('assets/pencil.png')
        }
    },[userDescription, description])
    useEffect(()=>{
        if(userName != nome){
            setSrcInputname('assets/check.png')
        }
    },[userName])
    
    function nameChange(){
        if(userName != auth.currentUser.displayName){
            if(userName.length > 4 ){
                alterarNome(auth, userName, database)
                setSrcInputname('assets/pencil.png')
            }else{
                alert('O Nome Precisa ter Mais de 4 Digitos')
            }
        } else{
            alert('Digite outro Nome')
        }
    }
    function descriptionChange(){
        setSrcInputDesc('assets/pencil.png')
    }
    
    return(
        <div className='body-perfil-menu-icon'>
            <div className='foto-perfil'>
                <label htmlFor='input-foto-perfil' className='content'>
                    <img src='assets/camera.png' alt='Camera Icon'/>
                    <span>Troque de foto</span>
                </label>
                <input className='input-file' type='file' id='input-foto-perfil'/>
                <img src='assets/perfil.png' alt='Perfil Photo'/>
            </div>
            <div className='inputs-area'>
                <div className='input-name'>
                    <label htmlFor='input-nome' >Nome :</label>
                    <div>
                        <input value={userName} onChange={text => setUserName(text.target.value)} 
                            name='input-nome' id='input-nome' type='text'/>
                        <img src={srcInputName} alt='Draw Icon' onClick={nameChange}/>                                
                    </div>
                </div>
                <div className='input-description'>
                    <label htmlFor='input-description' >Descrição :</label>
                    <div>
                        <input name='input-description' id='input-description' type='text'
                            value={userDescription}    onChange={text => setUserDescription( text.target.value)}/>
                        <img src={srcInputDesc} alt='Draw Icon' onClick={descriptionChange}/>                                
                    </div>                                
                </div>
            </div>
        </div>
    )
}