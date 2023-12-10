import React from 'react'
import { NavLink } from 'react-router-dom'
import { ACTIVE_STYLE, DEACTIVE_STYLE, Container } from './Styles'


const navLinksData = [
    { to: '', icon: 'home.png' },
    { to: '/habits', icon: 'habits.png' },
    { to: '/add', icon: 'add.png' },
    { to: '/about', icon: 'about.png' },
    { to: '/premium', icon:'premium.png'},
    { to: '/profile', icon: 'login.png' },
];


function Navbar() {
    return (
        <Container>

            {navLinksData.map((navLink, index) => (
                <React.Fragment key={index}>
                    <NavLink
                        to={navLink.to}
                        style={({ isActive }) => (isActive ? index===navLinksData.length-2? {...ACTIVE_STYLE,marginLeft:'auto'}:ACTIVE_STYLE : index===navLinksData.length-2? {...DEACTIVE_STYLE,marginLeft:'auto'}:DEACTIVE_STYLE)}
                        
                    >
                        <img src={`/icons/${navLink.icon}`} alt={`Icon for ${navLink.to}`} />
                    </NavLink>
                    &nbsp;&nbsp;
                </React.Fragment>
            ))}
        </Container>
    )
}

export default Navbar

