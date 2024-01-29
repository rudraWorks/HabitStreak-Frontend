import React, { useState } from 'react'
import useUser from '../../hooks/useUser'

function Support() {
    const { user } = useUser()
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
            { (user && user!=='LOADING') &&  <><h2>Dear, {user.name}</h2><br/></>}
            <h3>🌟 Extend a helping hand in settling the server bills for January; your generosity keeps the online vibes positive 💙</h3>
            <br />
            <a href='https://www.buymeacoffee.com/rudrapratapsingh' target='_blank'>
                <img alt='buy me a coffee' style={{ width: '200px', borderRadius: '10px' }} src='/images/bmc.png' />
            </a>
        </div>
    )
}

export default Support