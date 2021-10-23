import React from 'react'

// Import Widget
import ConfigHeader from './ConfigHeader'
import ConfigBody from './ConfigBody'

export default function Config(){
    return(
        <div className='other'>
            <div className='perfil active'>
                <ConfigHeader/>
                <ConfigBody/>
            </div>
        </div>
    )
}
