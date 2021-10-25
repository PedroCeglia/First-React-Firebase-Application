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
    let testett = 0
    const [changeTest, setChangeTest] = useState(0)
    
    const dataRef = ref(database,`mensagens/${userId}/${idDestinatarioEscolhidos}`)
    
    // MensageList
    const [msgList, setMsgList] = useState([])
    const [teste, setTeste] = useState(0) 
    let idMsgKey = 0

    useEffect(()=>{
        if(props.userIdDestinatario != idDestinatarioEscolhidos){
            console.log('mudou')
            console.log(props.userIdDestinatario)
            setIdDestinatarioEscolhidos(props.userIdDestinatario)
            setChangeTest(teste+1)
            setTeste(changeTest+1)
            
            console.log('------------------')
            console.log(teste)
            console.log(changeTest)
            console.log('------------------')
            
        }
    },[props.userIdDestinatario])

    // Recuperando Lista de Mensagens
    useEffect(()=>{
        console.log('mudou 2')
        if(idDestinatarioEscolhidos != undefined){
            
            
            console.log('mudou 3')
            onValue(dataRef, snapshot =>{
                if(snapshot.exists()){
                    console.log(snapshot)
                    newMensageList = []
                    snapshot.forEach(childSnapshot =>{
                        console.log(childSnapshot.val())
                        newMensageList.push(childSnapshot.val())
                    })  
                    setMsgList(newMensageList)
                    console.log(msgList.length + "1")  
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
                    let x = 0
                    let cclassSms
                    idMsgKey++
                    console.log(msgList.length + "1")  
                    if(msgList.length>0){
                    if(mensage.idUsuario === userId){
                        cclassSms = 'sms-you'
                        console.log('tttttttt')
                    } else{
                        cclassSms ='sms-friend'
                        console.log('zzzzzzz')
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
}/*
            <Mensage 
                smsClass='sms-you'
                smsHour='12:00'
                mensage='Oi'
            />
            <Mensage 
                smsClass='sms-friend'
                smsHour='12:00'
                mensage='Oi'
            />
            <Mensage 
                smsClass='sms-you'
                smsHour='12:00'
                mensage='Tudo bem?'
            />
            <Mensage 
                smsClass='sms-friend'
                smsHour='12:00'
                mensage='Tudo, e você?'
            />
            <Mensage 
                smsClass='sms-you'
                smsHour='12:00'
                mensage='To bem!'
            />
            <Mensage 
                smsClass='sms-friend'
                smsHour='12:00'
                mensage='Que Bom!'
            />
            <Mensage 
                smsClass='sms-you'
                smsHour='12:00'
                mensage='Ta afim de Surfar?'
            />
            <Mensage 
                smsClass='sms-friend'
                smsHour='12:00'
                mensage='To!!ddddddddddddddddddddddddd  dddddddddddddddddddddd'
            />            
            <Mensage 
                smsClass='sms-you'
                smsHour='12:00'
                mensage='Oi'
            />
            <Mensage 
                smsClass='sms-friend'
                smsHour='12:00'
                mensage='Oi'
            />
            <Mensage 
                smsClass='sms-you'
                smsHour='12:00'
                mensage='Tudo bem?'
            />
            <Mensage 
                smsClass='sms-friend'
                smsHour='12:00'
                mensage='Tudo, e você?'
            />
            <Mensage 
                smsClass='sms-you'
                smsHour='12:00'
                mensage='To bem!'
            />
            <Mensage 
                smsClass='sms-friend'
                smsHour='12:00'
                mensage='Que Bom!'
            />
            <Mensage 
                smsClass='sms-you'
                smsHour='12:00'
                mensage='Ta afim de Surfar?'
            />
            <Mensage 
                smsClass='sms-friend'
                smsHour='12:00'
                mensage='Eu so sei oque eu quero pra mim e não é escutar voces porque minha mae
                Eu so sei oque eu quero pra mim e não é escutar voces porque minha mae
                Eu so sei oque eu quero pra mim e não é escutar voces porque minha mae'
            /> 
*/