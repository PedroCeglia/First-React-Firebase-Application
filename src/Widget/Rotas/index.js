import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { verificaSeUsuarioEstaLogado, verificaSeUsuarioEstaDeslogado } from '../../Server/FirebaseConfig'
import Home from '../../Pages/Home'
import Intro from '../../Pages/Intro'

function PrivateRoute({component: Component, isLog,pathRedirect, ...rest}){
    return(
        <Route
            {...rest}
            render={props =>
                isLog()?(
                    <Component {...props}/>
                ):(
                    <Redirect to={{pathname: pathRedirect, state:{ from: props.location}}}/>
                )
            }
        />
    )
}
export default function Rotas(){

    return(
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path='/' component={Intro} isLog={verificaSeUsuarioEstaDeslogado} pathRedirect='/home'/>
                <PrivateRoute path='/home' component={Home} isLog={verificaSeUsuarioEstaLogado} pathRedirect='/'/>
            </Switch>
        </BrowserRouter>
    )
}