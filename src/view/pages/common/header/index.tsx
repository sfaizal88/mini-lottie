/**
 * Header component
 * @author - Faizal
 * @date - 12th June 2024
 */
// GENERIC IMPORT
import React from 'react';

// IMAGE
import LogoImage from '../../../../assests/img/logo.png';

// STYLE IMPORT
import './styles.css';

const Header = () => (
    <header>
        <img src={LogoImage} height={30} alt='Mini Lottie logo'/>
        <div className='header-title'><strong>Mini Lottie</strong> Editor</div>
    </header>
)

export default Header;