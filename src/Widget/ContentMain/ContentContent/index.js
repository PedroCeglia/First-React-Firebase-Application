import React, { useEffect, useState } from 'react'
import './style.css'

// Import Firebase
import { auth, database } from '../../../Server/FirebaseConfig'
import { ref, onValue, onChildAdded } from '@firebase/database'

// Import Widgets
import KeyboardChat from './KeyboardChat'
import MensageList from './MensageList'

export default function ContentContent(props){

    // Config Database Ref
    const [idDestinatarioEscolhidos, setIdDestinatarioEscolhidos] = useState() 
    const [userDestinatarioEscolhidos, setUserDestinatarioEscolhidos] = useState() 

    useEffect(()=>{
        setIdDestinatarioEscolhidos(props.userIdDestinatario)
        setUserDestinatarioEscolhidos(props.userDestinatario)
    },[props.userIdDestinatario, props.userDestinatario])
    

    return(
        <div className='content-content'>
            <img className='background' src='assets/background.jpeg' alt='Background'/>
            <MensageList
                userIdDestinatario={idDestinatarioEscolhidos}/>
            <KeyboardChat
                userIdDestinatario={idDestinatarioEscolhidos}
                userDestinatario={userDestinatarioEscolhidos}
            />
        </div>
    )
}