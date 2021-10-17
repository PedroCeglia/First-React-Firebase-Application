import React from 'react'
import './style.css'

export default function ContentContent(){
    return(
        <div className='content-content'>
            <img className='background' src='assets/background.jpeg' alt='Background'/>
            <div className='mensage-list'></div>
            <div className='keyboard-chat'>
                <img src='assets/emoji.png' alt='Emoji Icon' title='Emoji'/>
                <img src='assets/clip.png' alt='Attachment Icon' title='Attachment'/>
                <input type='text'/>
                <img src='assets/send.png'/>
            </div>
        </div>
    )
}