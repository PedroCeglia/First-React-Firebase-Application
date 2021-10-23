import React from "react";
import './style.css'

// Import Widgets
import HeaderNav from "./HeaderNav";
import NavNav from "./NavNav";
import Config from "./Config";

export default function NavMain(){
    return(
        <div className='container-main'>
            <div className='container-main-main'>
                <HeaderNav/>
                <NavNav/>                
            </div>
            <Config/>
        </div>
    )
}