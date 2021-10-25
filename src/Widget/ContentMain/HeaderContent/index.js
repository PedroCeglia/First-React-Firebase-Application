import React, {useState, useEffect} from "react";
import './style.css'

export default function HeaderContent(props){
    const [nameDestinatario, setNameDestinatario] = useState()
    const [srcDestinatario, setSrcDestinatario] = useState('assets/perfil.png')
    let userDestinatario = props.userDestinatario
    useEffect(()=>{
        if(userDestinatario !== null && userDestinatario !== undefined){
            setNameDestinatario(userDestinatario.nome)
            if(userDestinatario.foto !== null && userDestinatario.foto !== undefined){
            //console.log(userDestinatario.foto)
            setSrcDestinatario(userDestinatario.foto)        
            } else{
                setSrcDestinatario('assets/perfil.png')
            }
        }
    },[props.userDestinatario])


    return(
        <div className='main-header-content'>          
            <div className='user-date-content'>
                <img src={srcDestinatario} alt="Foto de Perfil Usuario Amigo"/>
                <div>
                    <h3>{nameDestinatario}</h3>
                    <span>Visto por ultimo</span>
                </div>
            </div>
            <div className='icons-header-content'>
                <img src='assets/search.png' alt='Icon Seacrh'/>
                <img src='assets/menu.png' alt='Icon Open Config'/>
            </div>
        </div>
    )
}