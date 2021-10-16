import React from "react";
import Header from "../../Widget/Header";
import { verificaSeUsuarioEstaLogado, logOutUser } from "../../Server/FirebaseConfig";

export default function Home(){
    verificaSeUsuarioEstaLogado()
    return(
        <div>
            <Header/>
            <button onClick={verificaSeUsuarioEstaLogado}>Clique e veja</button>
            <button onClick={logOutUser}>Clique e saia</button>
        </div>
    )
}