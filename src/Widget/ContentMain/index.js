import React from "react";
import './style.css'

//Import Widgets
import HeaderContent from "./HeaderContent";
import ContentContent from "./ContentContent";

export default function ContentMain(){
    return(
        <div>
            <HeaderContent/>
            <ContentContent/>
        </div>
    )
}