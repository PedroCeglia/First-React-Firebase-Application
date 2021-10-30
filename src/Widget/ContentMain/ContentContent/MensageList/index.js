import React, { useEffect, useState, useRef } from 'react'
import './style.css'

// Import Firebase
import { auth, database } from '../../../../Server/FirebaseConfig'
import { ref, onValue, onChildAdded } from '@firebase/database'
/*import { auth, enviandoMensagemDatabase } from "../../../../Server/FirebaseConfig";
*/

// Import Widgets
import Mensage from './Mensage'

export default function MensageList(props){
    
    // Usuario Atual
    const [user, setUser] = useState(auth.currentUser)
    useEffect(()=>{
        if(auth.currentUser != null){
            setUser(auth.currentUser)
        }
    }, [auth.currentUser])
    
    const [idDestinatarioEscolhidos, setIdDestinatarioEscolhidos] = useState(props.userIdDestinatario) 

    // Scroll Config
    const messageEl = useRef(null);
    useEffect(() => {
      if (messageEl) {
        messageEl.current.addEventListener('DOMNodeInserted', event => {
          const { currentTarget: target } = event;
          target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
        });
      }
    }, [])
    
    // MensageList Private Var
    let newMensageList = []
    const [changeTest, setChangeTest] = useState(0)
    
    let dataRef = ref(database,`mensagens/${user.uid}/${idDestinatarioEscolhidos}`)
    
    // MensageList
    const [msgList, setMsgList] = useState([])
    const [teste, setTeste] = useState(0) 
    let idMsgKey = 0

    // Recuperando IdDestinatario
    useEffect(()=>{
        if(props.userIdDestinatario != idDestinatarioEscolhidos){
            setIdDestinatarioEscolhidos(props.userIdDestinatario)
            setChangeTest(teste+1)
            setTeste(changeTest+1)
        }
    },[props.userIdDestinatario])
 
    // Recuperando Lista de Mensagens
    useEffect(()=>{ 
        if(idDestinatarioEscolhidos != null && idDestinatarioEscolhidos.length != 0){ 
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
            onChildAdded(dataRef, () => {
                setChangeTest(0)
                setTeste(0)
            })
        }
    },[changeTest])
    
    
    return(
        <div className='mensage-list' ref={messageEl}>
           { 
                msgList.map(mensage =>{
                    let cclassSms
                    idMsgKey++ 
                    if(msgList.length>0){
                    if(mensage.idUsuario === user.uid){
                        cclassSms = 'sms-you'
                    } else{
                        cclassSms ='sms-friend'
                    }
                    if(mensage.foto != null){
                        return(
                            <Mensage
                            key={idMsgKey}
                            smsClass={cclassSms}
                            smsHour={mensage.hour}
                            mensage={mensage.mensagem}
                            foto={mensage.foto}
                            />
                        )
                    } else{
                        return(
                            <Mensage
                            key={idMsgKey}
                            smsClass={cclassSms}
                            smsHour={mensage.hour}
                            mensage={mensage.mensagem}
                            />
                        )                        
                    }
                }
            })                    
           }
        </div>
    )
}