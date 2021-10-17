import React from "react";
import './style.css'

// Import Widgets
import ChatIcon from "./ChatIcon";

export default function NavNav(){
    return (
        <div className='nav-nav'>
            <div className='search-chat'>
                <img src='assets/search.png' alt='Search Icon' title='Search Chat'/>
                <input type='text' placeholder='Search a Chat'/>
            </div>
            <div className='chat-list'>
                <ChatIcon/>
                <ChatIcon/>
                <ChatIcon/>
                <ChatIcon/>
                <ChatIcon/>
                <ChatIcon/>
                <ChatIcon/>
                <ChatIcon/>
                <ChatIcon/>
                <ChatIcon/>
                <ChatIcon/>
                <ChatIcon/>
                <ChatIcon/>
                <ChatIcon/>
            </div>
        </div>
    )
}