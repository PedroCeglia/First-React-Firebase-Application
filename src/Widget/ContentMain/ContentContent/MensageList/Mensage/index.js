import React from "react";
import './style.css'

export default function Mensage(props){
    if(props.foto != null){
        if(props.mensage != null && props.mensage != "image.jpeg"){
            return(
                <div className={props.smsClass}>
                    <img src={props.foto}/>
                    <p>                
                        {props.mensage}
                        <span className='sms-hour'>{props.smsHour}</span>
                    </p>
                </div>
            )
        } else{
            return(
                <div className={props.smsClass}>
                    <img src={props.foto}/>
                    <p>                
                        <span className='sms-hour'>{props.smsHour}</span>
                    </p>
                </div>
            )
        }
    }  else{
        return(
            <p className={props.smsClass}>
                {props.mensage}
                <span className='sms-hour'>{props.smsHour}</span>
            </p>
        ) 
    }

}