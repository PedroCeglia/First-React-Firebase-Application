import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

// Import Firebase
import { auth, database, alterarNome, setDescriptionDatabase, setPerfilFoto} from '../../../../Server/FirebaseConfig'
import { get, ref, onChildChanged } from '@firebase/database'

export default function ConfigBody(){
    let nome =auth.currentUser.displayName
    let dataRef = ref(database, `usuarios/${auth.currentUser.uid}`)
    
    // Propriedades para alterarmos dados do usuario
    let changesUser = 0
    const [userChange, setUserChange] = useState(changesUser)

    const [userName, setUserName] = useState(nome)
    // Valor do Input
    const [userDescription, setUserDescription] = useState("")
    // Valor do DB
    const [description, setDescription] = useState("")
    

    // Use State For Images
    const [srcImage, setSrcImage] = useState('assets/perfil.png')
    const [srcInputName, setSrcInputname] = useState('assets/pencil.png')
    const [srcInputDesc, setSrcInputDesc] = useState('assets/pencil.png')

    // Get DataUser From Database
    useEffect(()=>{
        get(dataRef).then((snapshot)=>{
            if(snapshot.exists()){
                let usuario = snapshot.val()
                console.log(usuario)
                console.log(usuario.descricao)
                if(usuario.descricao!==null && usuario.descricao!==undefined){
                    setDescription(usuario.descricao)
                    setUserDescription(usuario.descricao)
                }
                if(usuario.foto !== null && usuario.foto !== undefined){
                    setSrcImage(usuario.foto)
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
        setDescriptionDatabase(database, auth.currentUser, userDescription)
        setSrcInputDesc('assets/pencil.png')
    }
    function setFoto(src){
        setPerfilFoto(auth.currentUser, src.target.files[0])
    }
    
    return(
        <div className='body-perfil-menu-icon'>
            <div className='foto-perfil'>
                <label htmlFor='input-foto-perfil' className='content'>
                    <img src='assets/camera.png' alt='Camera Icon'/>
                    <span>Troque de foto</span>
                </label>
                <input className='input-file' type='file' id='input-foto-perfil'
                    onChange={setFoto}/>
                <img src={srcImage} alt='Perfil Photo'/>
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
                            value={userDescription} onChange={text => setUserDescription( text.target.value)}/>
                        <img src={srcInputDesc} alt='Draw Icon' onClick={descriptionChange}/>                                
                    </div>                                
                </div>
            </div>
        </div>
    )
}