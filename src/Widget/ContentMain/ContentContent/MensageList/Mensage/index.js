import React from "react";

export default function Mensage(props){
    return(
        <div className={props.smsClass}>
            <span className='sms'>{props.mensage}</span>
            <span className='sms-hour'>{props.smsHour}</span>
        </div>
    )
}