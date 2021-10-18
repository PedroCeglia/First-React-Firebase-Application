import React from 'react'
import './style.css'

// Import Widgets
import KeyboardChat from './KeyboardChat'
import MensageList from './MensageList'

export default function ContentContent(){
    return(
        <div className='content-content'>
            <img className='background' src='assets/background.jpeg' alt='Background'/>
            <MensageList/>
            <KeyboardChat/>
        </div>
    )
}