import React from "react";
import './style.css'

export default function Mensage(props){
    return(
        <div className={props.smsClass}>
            <span className='sms'>{props.mensage}</span>
            <span className='sms-hour'>{props.smsHour}</span>
        </div>
    )
}