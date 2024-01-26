import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ACTIVE_STYLE, DEACTIVE_STYLE, Container } from './Styles'
import useUser from '../../hooks/useUser';


let navLinksData = [
    { to: '', icon: 'home.png' },
    { to: '/habits', icon: 'habits.png' },
    // { to: '/pages', icon: 'notes.png'},
    { to: '/add', icon: 'add.png' },
    { to: '/about', icon: 'about.png' },
    { to: '/profile', icon: 'login.png' },
    { to: '/signup', icon: 'signup.png' },
];


function Navbar() {

    const { user } = useUser()

    return (
        <Container>

            {navLinksData.map((navLink, index) => {
                
                if(!user && navLink.to==='/profile')
                    return null 
                if(user && navLink.to==='/signup')
                    return null

                return (<React.Fragment key={index}>
                    <NavLink
                        to={navLink.to}
                        style={({ isActive }) => (isActive ? navLink.to==='/signup' || navLink.to==='/profile' ? { ...ACTIVE_STYLE, marginLeft: 'auto' } : ACTIVE_STYLE : navLink.to==='/signup' || navLink.to==='/profile' ? { ...DEACTIVE_STYLE, marginLeft: 'auto' } : DEACTIVE_STYLE)}

                    >
                        <img src={`/icons/${navLink.icon}`} alt={`Icon for ${navLink.to}`} />
                    </NavLink>
                    &nbsp;&nbsp;
                </React.Fragment>)
            })}
        </Container>
    )
}

export default Navbar

