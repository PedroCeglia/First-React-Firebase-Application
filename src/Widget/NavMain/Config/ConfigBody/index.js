import React, { useState } from 'react'

// Import Firebase
import { auth, database, alterarNome } from '../../../../Server/FirebaseConfig'

export default function ConfigBody(){
    let nome =auth.currentUser.displayName
    const [userName, setUserName] = useState(nome)
    console.log(nome)

    function nameChange(){
        if(userName != auth.currentUser.displayName){
            if(userName.length > 4 ){
                alterarNome(auth, userName, database)
            }else{
                alert('O Nome Precisa ter Mais de 4 Digitos')
            }
        } else{
            alert('Digite outro Nome')
        }
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
                        <img src='assets/pencil.png' alt='Draw Icon' onClick={nameChange}/>                                
                    </div>
                </div>
                <div className='input-description'>
                    <label htmlFor='input-description' >Descrição :</label>
                    <div>
                        <input name='input-description' id='input-description' type='text'></input>
                        <img src='assets/pencil.png' alt='Draw Icon'/>                                
                    </div>                                
                </div>
            </div>
        </div>
    )
}