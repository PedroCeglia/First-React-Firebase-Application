import React, { useEffect, useState } from 'react'
import './style.css'

// Import Firebase
import { auth, database, setQuantasNotify } from '../../../Server/FirebaseConfig'
import { ref, onValue } from '@firebase/database'

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
    
    // User Datas
    const [user, setUser] = useState(auth.currentUser)
    useEffect(()=>{
        if(auth.currentUser != null){
            setUser(auth.currentUser)
        }
    }, [auth.currentUser])

    // Get Qnt
    const [qnts, setQnts] = useState(0)
    useEffect(()=>{
        const contatosRef = ref(database, `conversas/${idDestinatarioEscolhidos}/${user.uid}`)
        onValue(contatosRef , snapshot =>{
            if(snapshot.exists()){
                const conversa = snapshot.val()
                console.log(qnts)
                if(conversa.qnts != null) 
                    setQnts(conversa.qnts)
                    console.log(qnts)
            }
        })
    },[props.userIdDestinatario, user])

    return(
        <div className='content-content'>
            <img className='background' src='assets/background.jpeg' alt='Background'/>
            <MensageList
                userIdDestinatario={idDestinatarioEscolhidos}
                changeNotify={props.changeNotify}     
            />
            <KeyboardChat
                userIdDestinatario={idDestinatarioEscolhidos}
                userDestinatario={userDestinatarioEscolhidos}
                qnts={qnts}
            />
        </div>
    )
}