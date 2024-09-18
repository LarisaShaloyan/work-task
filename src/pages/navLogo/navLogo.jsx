import React from 'react';
import './navLogo.css'
import logo from '../../assets/logo.webp';
function NavLogo(props) {
    return (
        <div className="logo-container">

            <img src={logo} alt="Logo" className="logo"/>

</div>
)
    ;
}

export default NavLogo;