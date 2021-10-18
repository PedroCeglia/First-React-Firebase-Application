import React from "react";
import './style.css'

export default function KeyboardChat(){
    return(
        <div className='keyboard-chat'>
            <img src='assets/emoji.png' alt='Emoji Icon' title='Emoji'/>
            <img src='assets/clip.png' alt='Attachment Icon' title='Attachment'/>
            <input type='text'/>
            <img src='assets/send.png'/>
        </div>
    )
}