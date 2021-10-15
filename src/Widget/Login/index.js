import React, {useState} from 'react'
import { logandoUsuario } from '../Firebase'
import './style.css'
export default function Login(){

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
            <button onClick={recuperandoCampos}>Logar</button>
        </div>
    )
}