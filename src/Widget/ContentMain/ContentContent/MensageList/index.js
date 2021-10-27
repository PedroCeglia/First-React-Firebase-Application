import React, { useEffect, useState } from 'react'
import './style.css'

// Import Firebase
import { auth, database } from '../../../../Server/FirebaseConfig'
import { ref, onValue, onChildAdded } from '@firebase/database'
/*import { auth, enviandoMensagemDatabase } from "../../../../Server/FirebaseConfig";
*/

// Import Widgets
import Mensage from './Mensage'

export default function MensageList(props){
    
    // Config Database Ref
    let userId = auth.currentUser.uid
    //let userIdDestinatario = props.userIdDestinatario
    const [idDestinatarioEscolhidos, setIdDestinatarioEscolhidos] = useState() 

    
    
    // MensageList Private Var
    let newMensageList = []
    const [changeTest, setChangeTest] = useState(0)
    
    const dataRef = ref(database,`mensagens/${userId}/${idDestinatarioEscolhidos}`)
    
    // MensageList
    const [msgList, setMsgList] = useState([])
    const [teste, setTeste] = useState(0) 
    let idMsgKey = 0

    useEffect(()=>{
        if(props.userIdDestinatario != idDestinatarioEscolhidos){
            setIdDestinatarioEscolhidos(props.userIdDestinatario)
            setChangeTest(teste+1)
            setTeste(changeTest+1)
        }
    },[props.userIdDestinatario])

    // Recuperando Lista de Mensagens
    useEffect(()=>{
        if(idDestinatarioEscolhidos != undefined){
            onValue(dataRef, snapshot =>{
                if(snapshot.exists()){
                    newMensageList = []
                    snapshot.forEach(childSnapshot =>{
                        newMensageList.push(childSnapshot.val())
                    })  
                    setMsgList(newMensageList)
                } else{
                    setMsgList([])
                }
            })
        } else{}
    },[changeTest])
    // Listener Add Mensage
    useEffect(()=>{
        if(idDestinatarioEscolhidos != undefined){
            onChildAdded(dataRef, data => {
                setChangeTest(0)
                setTeste(0)
            })
        }
    },[changeTest]) 
    return(
        <div className='mensage-list'>
           { 
                msgList.map(mensage =>{
                    let cclassSms
                    idMsgKey++ 
                    if(msgList.length>0){
                    if(mensage.idUsuario === userId){
                        cclassSms = 'sms-you'
                    } else{
                        cclassSms ='sms-friend'
                    }
                return(
                    <Mensage
                    key={idMsgKey}
                    smsClass={cclassSms}
                    smsHour='12:00'
                    mensage={mensage.mensagem}
                    />
                )
                }
            })                    
               

           }
        </div>
    )
}