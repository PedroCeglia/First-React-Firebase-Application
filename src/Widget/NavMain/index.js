import React, { useState } from "react";
import './style.css'

// Import Widgets
import HeaderNav from "./HeaderNav";
import NavNav from "./NavNav";
import Config from "./Config";

export default function NavMain(){

    const [contatoUserId, setContatoUserId] = useState(null)

    return(
        <div className='container-main'>
            <div className='container-main-main'>
                <HeaderNav/>
                <NavNav
                   contatoUserId = {contatoUserId} 
                />                
            </div>
            <Config
                setContatoUserId ={setContatoUserId}/>
        </div>
    )
} 