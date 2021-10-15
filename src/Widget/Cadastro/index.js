import React, {useState} from 'react'
import { criaContaUsuario } from '../Firebase'
import './style.css'

export default function Cadastro(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function recuperandoCampos(){
        criaContaUsuario(email, password, name)
    }

    return(
        <div className='container-cadastro'>
            <h2>Cadastro</h2>
            <input
                type='text'
                value={name}
                onChange={text => setName(text.target.value)} 
                placeholder="Name">
            </input>       
            <input
                type='email'
                value={email}
                onChange={text => setEmail(text.target.value)} 
                placeholder="Email">
            </input>
            <input 
                type='password' 
                value={password} 
                onChange={text => setPassword(text.target.value)} 
                placeholder="Senha">
            </input>
            <div className='cadastro-buttons'>
                <button onClick={recuperandoCampos}>Logar</button>
                <a href="">Já Possui Uma Conta?</a>                
            </div>
        </div>
    )
}