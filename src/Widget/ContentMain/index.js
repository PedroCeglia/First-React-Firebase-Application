import React, { useEffect, useState } from "react";
import './style.css'

//Import Firebase
import { database } from "../../Server/FirebaseConfig";
import { get, ref } from "@firebase/database";

//Import Widgets
import HeaderContent from "./HeaderContent";
import ContentContent from "./ContentContent";

export default function ContentMain(props){
    
    let dataRef = ref(database, `usuarios/${props.idDestinatario}`)
    let [user, setUser] = useState()
    // Import User Destinatario from RealTime Database
        useEffect(()=>{
            get(dataRef).then(snapshot =>{ 
                if(snapshot.exists()){
                    setUser(snapshot.val())
                }
            })
        },[props.idDestinatario])

    if(props.idDestinatario !== null && props.idDestinatario !== undefined){
        return(
            <div>
                <HeaderContent 
                    userDestinatario={user}/>
                <ContentContent
                    userDestinatario={user}/>
            </div>
        )
    } else{
        return(
            <div className='notChat'>
                <h1>Open Any Chat</h1>
            </div>
        )
    }
}