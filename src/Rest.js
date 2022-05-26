import React from 'react'
import Menu from './Menu'
import Footer from './Footer'
import './main.css'

export default function Rest() {
    return (
        <div className='mainPage'>
            <Menu />
            <div className='intro'>
                <h1>Welcome to XYZ News Media</h1>
                <h3>the best media outlet</h3>
                <p>created for UAS WEBDESIGN</p>
            </div>
            <Footer />
        </div>
    )
}
