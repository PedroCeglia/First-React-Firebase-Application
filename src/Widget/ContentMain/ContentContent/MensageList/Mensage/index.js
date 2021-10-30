import React, {useState} from "react";
import './style.css'

// Import Widgets
import OpenMidia from "./OpenMidia";

export default function Mensage(props){

    const [active, setActive] = useState('open-midia-container')

    function handlerImage(){
        setActive("open-midia-container active")
    }

    if(props.foto != null){
        if(props.mensage != null && props.mensage != "image.jpeg"){
            return(
                <div className={props.smsClass}>
                    <img src={props.foto} alt='image Mensage' onClick={handlerImage}/>
                    <OpenMidia 
                        foto={props.foto}
                        active={active}
                        setActiveProps={setActive}
                    />
                    <p>                
                        {props.mensage}
                        <span className='sms-hour'>{props.smsHour}</span>
                    </p>
                </div>
            )
        } else{
            return(
                <div className={props.smsClass}>
                    <img src={props.foto} alt='image Mensage' onClick={handlerImage}/>
                    <OpenMidia 
                        foto={props.foto}
                        active={active}
                        setActiveProps={setActive}
                    />
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