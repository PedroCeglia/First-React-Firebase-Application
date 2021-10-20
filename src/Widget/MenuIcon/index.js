import React from "react";
import './style.css'

export default function MenuIcon(props){
    return(
        <div className='menu-container'>
            {props.listaMenus.map((lista)=>{
                return(
                    <button key={lista.key} className='menu-icon' onClick={lista.voidOnClick}>
                        {lista.name}
                    </button>
                )
            })}
        </div>
    )
}