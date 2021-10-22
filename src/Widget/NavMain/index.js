import React from "react";
import './style.css'

// Import Widgets
import HeaderNav from "./HeaderNav";
import NavNav from "./NavNav";

export default function NavMain(){
    return(
        <div className='container-main'>
            <div className='container-main-main'>
                <HeaderNav/>
                <NavNav/>                
            </div>
            <div className='other active'>
                <div className='perfil active'>
                    <div className='cabecalho-menu-icon'>
                        <img src='assets/back.png' alt='Back Icon' title='Voltar'/>
                        <span>Perfil</span>
                    </div>
                    <div className='body-perfil-menu-icon'>
                        <div className='foto-perfil'>
                            <label for='input-foto-perfil' className='content'>
                                <img src='assets/camera.png' alt='Camera Icon'/>
                                <span>Troque de foto</span>
                            </label>
                            <input className='input-file' type='file' id='input-foto-perfil'/>
                            <img src='assets/perfil.png' alt='Perfil Photo'/>
                        </div>
                        <div className='inputs-area'>
                            <div className='input-name'>
                                <label for='input-nome' >Nome :</label>
                                <div>
                                    <input name='input-nome' id='input-nome' type='text'></input>
                                    <img src='assets/pencil.png' alt='Draw Icon'/>                                
                                </div>
                            </div>
                            <div className='input-description'>
                                <label for='input-description' >Descrição :</label>
                                <div>
                                    <input name='input-description' id='input-description' type='text'></input>
                                    <img src='assets/pencil.png' alt='Draw Icon'/>                                
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}