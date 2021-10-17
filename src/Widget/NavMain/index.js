import React from "react";
import './style.css'

// Import Widgets
import HeaderNav from "./HeaderNav";
import NavNav from "./NavNav";

export default function NavMain(){
    return(
        <div>
            <HeaderNav/>
            <NavNav/>
        </div>
    )
}