import React from "react";

// Import Widgets
import ConfigPerfil from "./ConfigPerfil";
import ConfigContatos from "./ConfigContatos";

export default function ConfigBody(){
    return(
        <div className='container-config-body'>
            <ConfigPerfil/>
            <ConfigContatos/>
        </div>
        
    )
} 