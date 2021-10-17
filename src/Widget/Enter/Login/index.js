import React, {useState} from 'react'
import { logandoUsuario } from '../../../Server/FirebaseConfig'
import { Link } from 'react-router-dom'
import './style.css'

export default function Login(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function recuperandoCampos(){
        logandoUsuario(email, password)
    }

    return(
        <div className='container-login'>
            <h2>Login</h2>    
            <input
                type='email'
                value={email}
                onChange={text => setEmail(text.target.value)} 
                placeholder="Email: Ex) ...@gmail.com ">
            </input>
            <input 
                type='password' 
                value={password} 
                onChange={text => setPassword(text.target.value)} 
                placeholder="Senha">
            </input>
            <div className='login-buttons'>
                <button onClick={recuperandoCampos}>Logar</button>
                <button className='button-a' onClick={props.change}>Não Possui Uma Conta?</button>                
            </div>
        </div>
    )
}