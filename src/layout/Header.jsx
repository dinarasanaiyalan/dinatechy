import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/DinaTechy.png'
import '../assets/css/header.css'

function Header() {
    return (
        <div className='header-style'>
            <img src={logo} alt="Logo" width='50px' height='50px' />
            <ul className='menu-list'>
                <li>
                    <Link className='menu' to='/'>MySelf</Link>
                </li>
                <li>
                    <Link className='menu' to='/projects'>Projects</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header