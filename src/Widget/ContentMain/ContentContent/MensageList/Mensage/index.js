import React from "react";
import './style.css'

export default function Mensage(props){
    return(
       <p className={props.smsClass}>
           {props.mensage}
           <span className='sms-hour'>{props.smsHour}</span>
       </p>
    )
}