import React from 'react'
import './style.css'

// Import Widgets
import Mensage from './Mensage'

export default function MensageList(){
    return(
        <div className='mensage-list'>
            <Mensage 
                smsClass='sms-you'
                smsHour='12:00'
                mensage='Oi'
            />
            <Mensage 
                smsClass='sms-friend'
                smsHour='12:00'
                mensage='Oi'
            />
            <Mensage 
                smsClass='sms-you'
                smsHour='12:00'
                mensage='Tudo bem?'
            />
            <Mensage 
                smsClass='sms-friend'
                smsHour='12:00'
                mensage='Tudo, e você?'
            />
            <Mensage 
                smsClass='sms-you'
                smsHour='12:00'
                mensage='To bem!'
            />
            <Mensage 
                smsClass='sms-friend'
                smsHour='12:00'
                mensage='Que Bom!'
            />
            <Mensage 
                smsClass='sms-you'
                smsHour='12:00'
                mensage='Ta afim de Surfar?'
            />
            <Mensage 
                smsClass='sms-friend'
                smsHour='12:00'
                mensage='To!!ddddddddddddddddddddddddd \n dddddddddddddddddddddd'
            />            
        </div>
    )
}/*
<span className='sms-friend'>Oi</span>
<span className='sms-you'>Oi</span>
<span className='sms-friend'>Tudo bem?</span>
<span className='sms-you'>Sim e você?</span>
<span className='sms-friend'>To bem!</span>
<span className='sms-you'>Que bom!</span>
<span className='sms-friend'>Vamos surfa amanha?</span>
<span className='sms-you'>Vamos!!!</span>
<span className='sms-friend'>Oi</span>
<span className='sms-you'>Oi</span>
<span className='sms-friend'>Tudo bem?</span>
<span className='sms-you'>Sim e você?</span>
<span className='sms-friend'>To bem!</span>
<span className='sms-you'>Que bom!</span>
<span className='sms-friend'>Vamos surfa amanha?</span>
<span className='sms-you'>Vamos!!!</span>*/