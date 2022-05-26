import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default function Menu() {
    return (
        <header>
            <nav>
            <ul>
                <li><NavLink exact to="/" >Home</NavLink></li>
                <li><NavLink to="/search" >Search</NavLink></li>
                <li className='logo'>XYZ MEDIA</li>
            </ul>            
        </nav>
        </header>
        
    )
}
